export * from "./AzDpsClient";
export * from "./AzIoTHubClient";
export interface ConnectionInfo {
    scopeId: string;
    deviceId: string;
    hubName: string;
    deviceKey: string;
    masterKey?: string;
    modelId?: string;
    status: string;
    connected: boolean;
}
export interface DeviceTwin {
    reported: any;
    desired: any;
}
export interface CommandInfo {
    method: string;
    payload: string;
    response: string;
    rid: number;
    dirty: boolean;
}
