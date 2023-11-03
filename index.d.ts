import { AzDpsClient } from "./types/AzDpsClient";
import { AzIoTHubClient } from "./types/AzIoTHubClient";

export type ConnectionInfo = {
  scopeId: string;
  deviceId: string;
  hubName: string;
  deviceKey: string;
  masterKey?: string;
  modelId?: string;
  status: string;
  connected: bool;
};

export type DeviceTwin = {
  reported: any;
  desired: any;
};

export type CommandInfo = {
  method: string;
  payload: string;
  response: string;
  rid: number;
  dirty: boolean;
};

export { AzIoTHubClient, AzDpsClient };
