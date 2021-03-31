import axios from 'axios';


const SERVER_ADDRESS = 'http://192.168.178.24:8080';
export class CommunicationService {

    private static _instance = new CommunicationService(SERVER_ADDRESS);
    private url: string;

    constructor(url: string) {
        if (CommunicationService._instance) {
            throw new Error("Error: Providers failed: Use CommunicationService.getInstance() instead of new.");
        }
        this.url = url;
        CommunicationService._instance = this;
    }

    public static getInstance(): CommunicationService {
        return CommunicationService._instance;
    }

    private formUrlencoded(method: HTTP_METHODS, url: string, data: { [key: string]: string }) {
        /*
            https://www.npmjs.com/package/axios#using-applicationx-www-form-urlencoded-format
            URLSearchParams probaby needs a polyfill on expo but this should solve it
        */
        const transformRequest = (jsonData: { [key: string]: string }) => {
            return Object
                .entries(jsonData)
                .map((x) => `${encodeURIComponent(x[0])}=${encodeURIComponent(x[1])}`)
                .join('&')
        };

        return axios.request({
            url,
            method,
            data,
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            transformRequest
        });
    }

    login(username: string, password: string) {
        return this.formUrlencoded(HTTP_METHODS.POST, `${this.url}/api/v2/auth/login`, { username, password })
    }


    getWegApiVersion() {
        return axios.get(`${this.url}/api/v2/app/webapiVersion`)
    }
}

enum HTTP_METHODS {
    POST = 'POST',
    PUT = 'PUT',
    GET = 'GET',
    OPTIONS = 'OPTIONS'
}