import * as io from 'socket.io-client'
const config = require('../config');

// 获取server端口号
let port = config.dev.serverPort;

class Server {
    constructor () {
        let url = 'http://localhost:' + port;
        this.socket = io.connect(url);
        return this.socket;
    }
}
export default Server;