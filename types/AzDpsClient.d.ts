export declare const createHmac: (key: string, msg: string) => Promise<string>;
export declare class AzDpsClient {
    host: string;
    scopeId: any;
    deviceId: any;
    deviceKey: any;
    modelId: any;
    constructor(scopeId: any, deviceId: any, deviceKey: any, modelId: any);
    registerDevice(): Promise<any>;
}
