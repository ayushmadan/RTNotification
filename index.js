const http = require('http');
const express = require('express');
const socketio = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

io.on('connection', socket => {
  console.log("somebody connected")
  socket.on('joinRoom', ({ username, room }) => {
    console.log({'username':username, 'room':room})
    console.log('id',socket.id)
    socket.join(room);
    socket.emit('message', 'Welcome');

    socket.broadcast
      .to(room)
      .emit(
        'message',
        `${username} has joined the chat`
      );

    socket.on('message', msg => {
        console.log('msg',username,msg)
        io.to(room).emit('message', msg);
    });

    socket.on('sendMessage', ({ room, msg }) => {
      console.log({'room':room, 'msg':msg})
      
      io.to(room).emit('message', msg);
  });

    socket.on('leaveRoom', ({ username, room })  => {
      console.log('msg',username,room)
      socket.leave(room);
  });
  });

  socket.on('disconnect', () => {
    console.log('Somebody disconnected.')
  });
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
