import Axios from "axios";
// import WebSocket from "ws";

import { API_URL, WS_URL } from 'utils/constants'

const AuthAPI = Axios.create({
    baseURL: API_URL,
    timeout: 10000,
    // headers: {
    //     'Access-Control-Allow-Origin': "*"
    // }
    // xsrfCookieName: "csrftoken",
    // xsrfHeaderName: "X-CSRFToken",
});

const createWs = (query) => {
    return process.browser ? new WebSocket(WS_URL + query) : {};
};

export { AuthAPI, createWs }