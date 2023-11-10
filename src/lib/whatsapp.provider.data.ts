export type StreamEvent = (data: any) => void;
export interface CreateInput {
    name: string;
    title: string;
    avatar: string;
    keepMessages: boolean;
    webhooks: string[];
    tags: string[];
}

export interface GetInput {
    deviceId: string;
}

export interface ListContactsInput {
    deviceId: string;
}

export interface RemoveInput {
    deviceId: string;
}

export interface ListenerInput {
    devices: string[];
    events: string[];
}