import axios from 'axios';

const SERVER_ADDRESS = ''
const API_TOKEN = ''

export class ZeroTierCentralApi {

    private static _instance = new ZeroTierCentralApi(SERVER_ADDRESS, API_TOKEN);
    private url: string;
    private apiToken: string;

    constructor(url: string, apiToken: string) {
        if (ZeroTierCentralApi._instance) {
            throw new Error("Error: Providers failed: Use CommunicationService.getInstance() instead of new.");
        }
        this.url = url;
        this.apiToken = apiToken;
        ZeroTierCentralApi._instance = this;
    }

    private getAuthHeader() {
        return { Authorization: `Bearer ${API_TOKEN}` }
    }

    public static getInstance(): ZeroTierCentralApi {
        return ZeroTierCentralApi._instance;
    }


    getNetworksList() {
        return axios.get(`${this.url}/network`, { headers: this.getAuthHeader() });
    }
}
