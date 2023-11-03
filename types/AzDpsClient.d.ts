export function createHmac(key: string, msg: string): Promise<string>;
export class AzDpsClient {
    constructor(scopeId: any, deviceId: any, deviceKey: any, modelId: any);
    host: string;
    scopeId: any;
    deviceId: any;
    deviceKey: any;
    modelId: any;
    registerDevice(): Promise<any>;
}
