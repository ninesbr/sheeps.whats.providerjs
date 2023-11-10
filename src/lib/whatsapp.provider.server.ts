import {ChannelCredentials, Metadata} from "@grpc/grpc-js";
import {AdminServiceClient} from "./message_grpc_pb";
import {
    CreateInput,
    GetInput,
    ListContactsInput,
    ListenerInput,
    RemoveInput,
    StreamEvent
} from "./whatsapp.provider.data";
import * as crypto from "crypto";
import {
    CreateRequest,
    Request,
    Device,
    GetRequest,
    ListRequest,
    ListContactRequest,
    Contact,
    RemoveRequest, ListenerRequest, ListenerResponse
} from "./message_pb";

const jsonUnmarshall = (buffer: Uint8Array): { [key: string]: any; } => {
    const jsonString = Buffer.from(buffer).toString('utf8');
    return JSON.parse(jsonString);
}
export class WhatsappProviderServer {
    private readonly _host: string;
    private readonly _port: number;
    private readonly _insecure: boolean;
    private _client: AdminServiceClient;
    constructor(host: string, port: number, token: string, insecure?: boolean) {
        this._host = host;
        this._port = port;
        this._insecure = insecure === undefined ? true : insecure;
    }
    connect(waitSeconds?: number): Promise<WhatsappProviderServer> {
        let ops;
        if (this._insecure) {
            ops = ChannelCredentials.createInsecure();
        } else {
            ops = ChannelCredentials.createSsl();
        }
        return new Promise<WhatsappProviderServer>((resolve, reject) => {
            this._client = new AdminServiceClient(`${this._host}:${this._port}`, ops);
            const deadline = new Date();
            deadline.setSeconds(deadline.getSeconds() + (waitSeconds || 5));
            this._client.waitForReady(deadline, (err: Error) => {
                if (err) {
                    reject(err);
                    return;
                }
                resolve(this);
            });
        });
    }

    public createDevice(input: CreateInput): Promise<any> {

        const device = new Device();
        device.setName(input.name);
        device.setTitle(input.title);
        device.setAvatar(input.avatar);
        device.setTagsList(input?.tags || []);
        device.setWebhooksList(input?.webhooks || []);
        device.setKeepmessages(input.keepMessages);

        const req = new CreateRequest();
        req.setRequest(this.request());
        req.setDevice(device);

        return new Promise<any>((resolve, reject) => {
            this._client?.create(req, (err, res) => {
                if (err) {
                    reject(err);
                    return;
                }
                const error = res.getResponse()?.getError();
                if(error?.getReasonList()?.length > 0) {
                    reject(Error(error.getReasonList()?.join(', ')));
                    return;
                }
                resolve({
                    response: {
                        id: res.getResponse()?.getId(),
                    },
                    device: {
                        id: res.getDevice()?.getId(),
                        name: res.getDevice()?.getName(),
                        title: res.getDevice()?.getTitle(),
                        avatar: res.getDevice()?.getAvatar(),
                        accessKey: res.getDevice()?.getAccesskey(),
                        tags: res.getDevice()?.getTagsList(),
                        webhooks: res.getDevice()?.getWebhooksList(),
                        keepMessages: res.getDevice()?.getKeepmessages(),
                    },
                });
            });
        });
    }

    public getDevice(input: GetInput): Promise<any> {
        const req = new GetRequest();
        req.setRequest(this.request(input.deviceId));
        return new Promise<any>((resolve, reject) => {
            this._client?.get(req, (err, res) => {
                if (err) {
                    reject(err);
                    return;
                }
                const error = res.getResponse()?.getError();
                if(error?.getReasonList()?.length > 0) {
                    reject(Error(error.getReasonList()?.join(', ')));
                    return;
                }
                const device = res.getDevice();
                const m = {};
                device.getPropertiesMap().forEach((v: string, k: any) => {
                    m[k] = v;
                })
                resolve({
                    response: {
                        id: res.getResponse()?.getId(),
                    },
                    device: {
                        id: device?.getId(),
                        name: device?.getName(),
                        title: device?.getTitle(),
                        avatar: device?.getAvatar(),
                        accessKey: device?.getAccesskey(),
                        tags: device?.getTagsList(),
                        webhooks: device?.getWebhooksList(),
                        keepMessages: device?.getKeepmessages(),
                        properties: m,
                    },
                });
            });
        });
    }

    public getDevices(): Promise<any> {
        const req = new ListRequest();
        req.setRequest(this.request());
        return new Promise<any>((resolve, reject) => {
            this._client?.list(req, (err, res) => {
                if (err) {
                    reject(err);
                    return;
                }
                const error = res.getResponse()?.getError();
                if(error?.getReasonList()?.length > 0) {
                    reject(Error(error.getReasonList()?.join(', ')));
                    return;
                }
                resolve({
                    response: {
                        id: res.getResponse()?.getId(),
                    },
                    devices: res.getDevicesList().map((item: Device) => {
                        return {
                            ...item.toObject(),
                        }
                    }),
                });
            });
        });
    }

    public getContacts(input: ListContactsInput): Promise<any> {
        const req = new ListContactRequest();
        req.setRequest(this.request(input.deviceId));
        return new Promise<any>((resolve, reject) => {
            this._client?.listContact(req, (err, res) => {
                if (err) {
                    reject(err);
                    return;
                }
                const error = res.getResponse()?.getError();
                if(error?.getReasonList()?.length > 0) {
                    reject(Error(error.getReasonList()?.join(', ')));
                    return;
                }
                resolve({
                    response: {
                        id: res.getResponse()?.getId(),
                    },
                    contacts: res.getContactsList().map((item: Contact) => {
                        return {
                            ...item.toObject(),
                        }
                    }),
                });
            });
        });
    }

    public removeDevice(input: RemoveInput): Promise<any> {
        const req = new RemoveRequest();
        req.setRequest(this.request(input.deviceId));
        return new Promise((resolve, reject) => {
            this._client?.remove(req, (err, res) => {
                if (err) {
                    reject(err);
                    return;
                }
                const error = res.getResponse()?.getError();
                if(error?.getReasonList()?.length > 0) {
                    reject(Error(error.getReasonList()?.join(', ')));
                    return;
                }
                resolve({
                    response: {
                        id: res.getResponse()?.getId(),
                        deviceId: res.getResponse()?.getDeviceid(),
                    },
                });
            });
        });
    }

    public listenerEvents(input: ListenerInput, event: StreamEvent): Promise<void> {

        const req = new ListenerRequest();
        req.setRequest(this.request());
        req.setFilterdevicesList(input.devices);
        req.setFiltereventsList(input.events);

        const m = new Metadata();

        return new Promise<void>((resolve, reject) => {
            const stream = this._client?.listener(req, m);
            stream.on('data', (msg: ListenerResponse) => {
                // console.log( msg.getTime());
                if (event) {
                    event({
                        id: msg.getResponse()?.getId(),
                        deviceId: msg.getResponse()?.getDeviceid(),
                        name: msg.getName(),
                        body: jsonUnmarshall(msg.getBody_asU8()),
                        time: new Date(msg.getTime()),
                    });
                }
            });
            stream.on('error', (err: any) => {
                console.log('error', err);
                if (err.code && err.code === 13) {
                    return;
                }
                reject(err);
            });
            stream.on('end', () => {
                console.log('end');
                resolve();
            });
        })
            .catch(async (err) => {
                await new Promise(resolve => setTimeout(resolve, 5000))
                // console.log("💣 subscribe retry reconnecting...")
                return this.listenerEvents(input, event)
            });
    }

    private request(deviceId?: string): Request {
        const req = new Request();
        req.setId(crypto.randomUUID());
        if (deviceId) {
            req.setDeviceid(deviceId);
        }
        return req;
    }
}