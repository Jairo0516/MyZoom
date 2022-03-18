const express = require('express');
var app = express();

//servidor http a partir de express
var http = require('http').Server(app);

//socket.io para comunicar
const io = require('socket.io')(http);

//routes

app.use(require('./routes/myzoom.routes'));

//cargar los html
app.use(express.static(__dirname + '/public'));

//evento para crear conexion multicanal
io.on('connection', (socket) => {
	socket.on('stream', (image) => {
		//emitir el evento a todos los sockets(emisores)conectados
		socket.broadcast.emit('stream', image);
	});
});


while(1<5){


	console.log("Hola")
	return true;

}

module.exports = http;
