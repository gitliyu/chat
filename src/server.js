import * as io from 'socket.io-client'
const config = require('../config')

let port = config.dev.serverPort;

class Server {
    constructor () {
        let url = 'http://localhost:' + port;
        this.socket = io.connect(url);
    }
    send (name, msg) {
        this.socket.emit(name, msg)
    }
    get(name, msg){
        this.socket.on(name, msg)
    }
}

export default Server;