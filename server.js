const express = require('express');
const app = express();

const http = require('http');
const server = http.Server(app);

app.use(express.static('client'));

const io = require('socket.io')(server);

io.on('connection', function (socket) {
  socket.on('message', function (msg) {
    io.emit('message', msg);
  });
});

server.listen(8080, function() {
  console.log('Chat server running');
});