"use strict";
// const REGISTRATION_TOPIC = '$dps/registrations/res/#'
// const REGISTER_TOPIC = '$dps/registrations/PUT/iotdps-register/?$rid='
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AzDpsClient = exports.createHmac = void 0;
const createHmac = (key, msg) => __awaiter(void 0, void 0, void 0, function* () {
    const keyBytes = Uint8Array.from(window.atob(key), (c) => c.charCodeAt(0));
    const msgBytes = Uint8Array.from(msg, (c) => c.charCodeAt(0));
    const cryptoKey = yield window.crypto.subtle.importKey("raw", keyBytes, { name: "HMAC", hash: "SHA-256" }, true, ["sign"]);
    const signature = yield window.crypto.subtle.sign("HMAC", cryptoKey, msgBytes);
    return window.btoa(String.fromCharCode(...new Uint8Array(signature)));
});
exports.createHmac = createHmac;
class AzDpsClient {
    constructor(scopeId, deviceId, deviceKey, modelId) {
        this.host = "global.azure-devices-provisioning.net";
        this.scopeId = scopeId;
        this.deviceId = deviceId;
        this.deviceKey = deviceKey;
        this.modelId = modelId;
    }
    registerDevice() {
        return __awaiter(this, void 0, void 0, function* () {
            const endpoint = "https://dps-proxy.azurewebsites.net/register";
            const url = `${endpoint}?scopeId=${this.scopeId}&deviceId=${this.deviceId}&deviceKey=${encodeURIComponent(this.deviceKey)}&modelId=${this.modelId}`;
            console.log(url);
            const response = yield fetch(url, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Content-Encoding": "utf-8",
                },
            });
            const resp = yield response.json();
            console.log(resp);
            return resp;
        });
    }
}
exports.AzDpsClient = AzDpsClient;
