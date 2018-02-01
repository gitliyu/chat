const config = require('../config');
let socketIo = require('socket.io');
let app = require('express')();
let server = require('http').Server(app);
let httpPort = config.dev.serverPort;

app.get('/',function(req,res){
    res.send('启动成功：' + httpPort);
});

let io = socketIo(server);

io.on('connection',function(socket){ 
    console.log('有客户端连接:' + socket.id);

    socket.on('test', function(msg){
		console.log(msg);
	});

    socket.on('disconnect', function(){
    console.log('客户端断开');
  });
});

server.listen(httpPort, function(){
	console.log('listen success on ' + httpPort);
});