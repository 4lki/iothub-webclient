/// <reference types="paho-mqtt" />
export declare class AzIoTHubClient {
    connected: boolean;
    host: any;
    deviceId: any;
    key: any;
    modelId: any;
    rid: number;
    client: Paho.MQTT.Client;
    c2dCallback: (method: any, payload: any, rid: any) => void;
    desiredPropCallback: (desired: any) => void;
    disconnectCallback: (err: any) => void;
    _onReadTwinCompleted: (twin: any) => void;
    _onUpdateTwinCompleted: () => void;
    _onTwinError: (err: any) => void;
    constructor(host: any, deviceId: any, key: any, modelId: any);
    connect(): Promise<unknown>;
    /**
     * @return {Promise<DeviceTwin>}
     */
    getTwin(): Promise<unknown>;
    /**
     * @param {string} reportedProperties
     */
    updateTwin(reportedProperties: any): Promise<unknown>;
    /**
     * @param {string} payload
     */
    sendTelemetry(payload: any): void;
    /**
     * @param {{ (methodName: string, payload:string, rid:number): void}} c2dCallback
     */
    setDirectMehodCallback(c2dCallback: any): void;
    /**
     * @param {string} methodName
     * @param {string} payload
     * @param {number} rid
     * @param {number} status
     */
    commandResponse(methodName: any, payload: any, rid: any, status: any): void;
    /**
     * @param {{ (desired: string): void}} desiredPropCallback
     */
    setDesiredPropertyCallback(desiredPropCallback: any): void;
}
export declare const ackPayload: (propValues: any, ac: any, av: any) => {};
