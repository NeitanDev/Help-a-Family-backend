const express = require('express');
const routes = require('./routes');
const http = require('http');
const socketio = require('socket.io');

require('./database/index');

const app = express();
const server = http.Server(app);
const io = socketio(server);

io.on('connection', socket =>{
    console.log('usuario conectado', socket.id);
});

app.use(express.json());
app.use(routes);

server.listen(3333);