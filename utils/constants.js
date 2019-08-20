const WEB_URL = process.browser ? window.location.protocol + "//" + window.location.hostname + ":8000/" : process.env.WEB_URL;
const WS_URL = process.browser ? (window.location.protocol.includes('s') ? 'wss:' : 'ws:') + "//" + window.location.hostname + ":8000/ws/api/" : process.env.WS_URL;
const API_URL = process.browser ? WEB_URL + "api/" : process.env.API_URL;
const AUTH_COOKIE_KEY = 'authorization';

export { WEB_URL, API_URL, WS_URL, AUTH_COOKIE_KEY }