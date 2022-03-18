const express = require('express');
var app = express();

var http = require('http').Server(app);

const io = require('socket.io')(http);


app.use(require('./routes/myzoom.routes'));

app.use(express.static(__dirname + '/public'));

io.on('connection', (socket) => {
	socket.on('stream', (image) => {
		//emitir el evento a todos los sockets(emisores)conectados
		socket.broadcast.emit('stream', image);
	});
});


module.exports = http;
