import { w3cwebsocket as W3CWebSocket } from 'websocket';

const webSocketClient = new W3CWebSocket('ws://127.0.0.1:8001');

export default webSocketClient;
