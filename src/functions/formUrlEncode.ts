import axios from "axios";

export function formUrlencoded(method: HTTP_METHODS, url: string, data: { [key: string]: string }) {
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

enum HTTP_METHODS {
    POST = 'POST',
    PUT = 'PUT',
    GET = 'GET',
    OPTIONS = 'OPTIONS'
}