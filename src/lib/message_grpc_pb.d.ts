// package: pb
// file: message.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as message_pb from "./message_pb";

interface IAdminServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    create: IAdminServiceService_ICreate;
    remove: IAdminServiceService_IRemove;
    get: IAdminServiceService_IGet;
    list: IAdminServiceService_IList;
    listContact: IAdminServiceService_IListContact;
    listener: IAdminServiceService_IListener;
    streamMessage: IAdminServiceService_IStreamMessage;
}

interface IAdminServiceService_ICreate extends grpc.MethodDefinition<message_pb.CreateRequest, message_pb.CreateResponse> {
    path: "/pb.AdminService/Create";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<message_pb.CreateRequest>;
    requestDeserialize: grpc.deserialize<message_pb.CreateRequest>;
    responseSerialize: grpc.serialize<message_pb.CreateResponse>;
    responseDeserialize: grpc.deserialize<message_pb.CreateResponse>;
}
interface IAdminServiceService_IRemove extends grpc.MethodDefinition<message_pb.RemoveRequest, message_pb.RemoveResponse> {
    path: "/pb.AdminService/Remove";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<message_pb.RemoveRequest>;
    requestDeserialize: grpc.deserialize<message_pb.RemoveRequest>;
    responseSerialize: grpc.serialize<message_pb.RemoveResponse>;
    responseDeserialize: grpc.deserialize<message_pb.RemoveResponse>;
}
interface IAdminServiceService_IGet extends grpc.MethodDefinition<message_pb.GetRequest, message_pb.GetResponse> {
    path: "/pb.AdminService/Get";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<message_pb.GetRequest>;
    requestDeserialize: grpc.deserialize<message_pb.GetRequest>;
    responseSerialize: grpc.serialize<message_pb.GetResponse>;
    responseDeserialize: grpc.deserialize<message_pb.GetResponse>;
}
interface IAdminServiceService_IList extends grpc.MethodDefinition<message_pb.ListRequest, message_pb.ListResponse> {
    path: "/pb.AdminService/List";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<message_pb.ListRequest>;
    requestDeserialize: grpc.deserialize<message_pb.ListRequest>;
    responseSerialize: grpc.serialize<message_pb.ListResponse>;
    responseDeserialize: grpc.deserialize<message_pb.ListResponse>;
}
interface IAdminServiceService_IListContact extends grpc.MethodDefinition<message_pb.ListContactRequest, message_pb.ListContactResponse> {
    path: "/pb.AdminService/ListContact";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<message_pb.ListContactRequest>;
    requestDeserialize: grpc.deserialize<message_pb.ListContactRequest>;
    responseSerialize: grpc.serialize<message_pb.ListContactResponse>;
    responseDeserialize: grpc.deserialize<message_pb.ListContactResponse>;
}
interface IAdminServiceService_IListener extends grpc.MethodDefinition<message_pb.ListenerRequest, message_pb.ListenerResponse> {
    path: "/pb.AdminService/Listener";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<message_pb.ListenerRequest>;
    requestDeserialize: grpc.deserialize<message_pb.ListenerRequest>;
    responseSerialize: grpc.serialize<message_pb.ListenerResponse>;
    responseDeserialize: grpc.deserialize<message_pb.ListenerResponse>;
}
interface IAdminServiceService_IStreamMessage extends grpc.MethodDefinition<message_pb.StreamMessageRequest, message_pb.StreamMessageResponse> {
    path: "/pb.AdminService/StreamMessage";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<message_pb.StreamMessageRequest>;
    requestDeserialize: grpc.deserialize<message_pb.StreamMessageRequest>;
    responseSerialize: grpc.serialize<message_pb.StreamMessageResponse>;
    responseDeserialize: grpc.deserialize<message_pb.StreamMessageResponse>;
}

export const AdminServiceService: IAdminServiceService;

export interface IAdminServiceServer extends grpc.UntypedServiceImplementation {
    create: grpc.handleUnaryCall<message_pb.CreateRequest, message_pb.CreateResponse>;
    remove: grpc.handleUnaryCall<message_pb.RemoveRequest, message_pb.RemoveResponse>;
    get: grpc.handleUnaryCall<message_pb.GetRequest, message_pb.GetResponse>;
    list: grpc.handleUnaryCall<message_pb.ListRequest, message_pb.ListResponse>;
    listContact: grpc.handleUnaryCall<message_pb.ListContactRequest, message_pb.ListContactResponse>;
    listener: grpc.handleServerStreamingCall<message_pb.ListenerRequest, message_pb.ListenerResponse>;
    streamMessage: grpc.handleServerStreamingCall<message_pb.StreamMessageRequest, message_pb.StreamMessageResponse>;
}

export interface IAdminServiceClient {
    create(request: message_pb.CreateRequest, callback: (error: grpc.ServiceError | null, response: message_pb.CreateResponse) => void): grpc.ClientUnaryCall;
    create(request: message_pb.CreateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: message_pb.CreateResponse) => void): grpc.ClientUnaryCall;
    create(request: message_pb.CreateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: message_pb.CreateResponse) => void): grpc.ClientUnaryCall;
    remove(request: message_pb.RemoveRequest, callback: (error: grpc.ServiceError | null, response: message_pb.RemoveResponse) => void): grpc.ClientUnaryCall;
    remove(request: message_pb.RemoveRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: message_pb.RemoveResponse) => void): grpc.ClientUnaryCall;
    remove(request: message_pb.RemoveRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: message_pb.RemoveResponse) => void): grpc.ClientUnaryCall;
    get(request: message_pb.GetRequest, callback: (error: grpc.ServiceError | null, response: message_pb.GetResponse) => void): grpc.ClientUnaryCall;
    get(request: message_pb.GetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: message_pb.GetResponse) => void): grpc.ClientUnaryCall;
    get(request: message_pb.GetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: message_pb.GetResponse) => void): grpc.ClientUnaryCall;
    list(request: message_pb.ListRequest, callback: (error: grpc.ServiceError | null, response: message_pb.ListResponse) => void): grpc.ClientUnaryCall;
    list(request: message_pb.ListRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: message_pb.ListResponse) => void): grpc.ClientUnaryCall;
    list(request: message_pb.ListRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: message_pb.ListResponse) => void): grpc.ClientUnaryCall;
    listContact(request: message_pb.ListContactRequest, callback: (error: grpc.ServiceError | null, response: message_pb.ListContactResponse) => void): grpc.ClientUnaryCall;
    listContact(request: message_pb.ListContactRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: message_pb.ListContactResponse) => void): grpc.ClientUnaryCall;
    listContact(request: message_pb.ListContactRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: message_pb.ListContactResponse) => void): grpc.ClientUnaryCall;
    listener(request: message_pb.ListenerRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<message_pb.ListenerResponse>;
    listener(request: message_pb.ListenerRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<message_pb.ListenerResponse>;
    streamMessage(request: message_pb.StreamMessageRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<message_pb.StreamMessageResponse>;
    streamMessage(request: message_pb.StreamMessageRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<message_pb.StreamMessageResponse>;
}

export class AdminServiceClient extends grpc.Client implements IAdminServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public create(request: message_pb.CreateRequest, callback: (error: grpc.ServiceError | null, response: message_pb.CreateResponse) => void): grpc.ClientUnaryCall;
    public create(request: message_pb.CreateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: message_pb.CreateResponse) => void): grpc.ClientUnaryCall;
    public create(request: message_pb.CreateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: message_pb.CreateResponse) => void): grpc.ClientUnaryCall;
    public remove(request: message_pb.RemoveRequest, callback: (error: grpc.ServiceError | null, response: message_pb.RemoveResponse) => void): grpc.ClientUnaryCall;
    public remove(request: message_pb.RemoveRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: message_pb.RemoveResponse) => void): grpc.ClientUnaryCall;
    public remove(request: message_pb.RemoveRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: message_pb.RemoveResponse) => void): grpc.ClientUnaryCall;
    public get(request: message_pb.GetRequest, callback: (error: grpc.ServiceError | null, response: message_pb.GetResponse) => void): grpc.ClientUnaryCall;
    public get(request: message_pb.GetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: message_pb.GetResponse) => void): grpc.ClientUnaryCall;
    public get(request: message_pb.GetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: message_pb.GetResponse) => void): grpc.ClientUnaryCall;
    public list(request: message_pb.ListRequest, callback: (error: grpc.ServiceError | null, response: message_pb.ListResponse) => void): grpc.ClientUnaryCall;
    public list(request: message_pb.ListRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: message_pb.ListResponse) => void): grpc.ClientUnaryCall;
    public list(request: message_pb.ListRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: message_pb.ListResponse) => void): grpc.ClientUnaryCall;
    public listContact(request: message_pb.ListContactRequest, callback: (error: grpc.ServiceError | null, response: message_pb.ListContactResponse) => void): grpc.ClientUnaryCall;
    public listContact(request: message_pb.ListContactRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: message_pb.ListContactResponse) => void): grpc.ClientUnaryCall;
    public listContact(request: message_pb.ListContactRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: message_pb.ListContactResponse) => void): grpc.ClientUnaryCall;
    public listener(request: message_pb.ListenerRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<message_pb.ListenerResponse>;
    public listener(request: message_pb.ListenerRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<message_pb.ListenerResponse>;
    public streamMessage(request: message_pb.StreamMessageRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<message_pb.StreamMessageResponse>;
    public streamMessage(request: message_pb.StreamMessageRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<message_pb.StreamMessageResponse>;
}
