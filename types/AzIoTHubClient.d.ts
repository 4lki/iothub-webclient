export class AzIoTHubClient {
    /**
     * @param {string} host
     * @param {string} deviceId
     * @param {string} key
     * @param {string} [modelId]
     */
    constructor(host: string, deviceId: string, key: string, modelId?: string);
    connected: boolean;
    host: string;
    deviceId: string;
    key: string;
    modelId: string;
    rid: number;
    client: Paho.MQTT.Client;
    /**
     * @description Callback when a commnand invocation is received
     * @param {string} method
     * @param {string} payload
     * @param {number} rid
     */
    c2dCallback: (method: string, payload: string, rid: number) => void;
    /**
     * @description Callback for desired properties upadtes
     * @param {string} desired
     */
    desiredPropCallback: (desired: string) => void;
    /**
     * @param {any} err
     */
    disconnectCallback: (err: any) => void;
    /**
     * @param {any} twin
     */
    _onReadTwinCompleted: (twin: any) => void;
    _onUpdateTwinCompleted: () => void;
    /**
     * @description Connects to Azure IoT Hub using MQTT over websockets
     */
    connect(): Promise<any>;
    /**
     * @return {Promise<DeviceTwin>}
     */
    getTwin(): Promise<DeviceTwin>;
    /**
     * @param {string} reportedProperties
     */
    updateTwin(reportedProperties: string): Promise<any>;
    /**
     * @param {string} payload
     */
    sendTelemetry(payload: string): void;
    /**
     * @param {{ (methodName: string, payload:string, rid:number): void}} c2dCallback
     */
    setDirectMehodCallback(c2dCallback: (methodName: string, payload: string, rid: number) => void): void;
    /**
     * @param {string} methodName
     * @param {string} payload
     * @param {number} rid
     * @param {number} status
     */
    commandResponse(methodName: string, payload: string, rid: number, status: number): void;
    /**
     * @param {{ (desired: string): void}} desiredPropCallback
     */
    setDesiredPropertyCallback(desiredPropCallback: (desired: string) => void): void;
}
export function ackPayload(propValues: any, ac: any, av: any): {};
