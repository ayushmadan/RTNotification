var io = require('socket.io-client');
var socket = io.connect('http://localhost:3000', {reconnect: true});

socket.on('connect', function (socket) {
    console.log('Connected!');
});
let username = process.argv[2];
let room = process.argv[3];
socket.emit('joinRoom', { username, room });
socket.emit('message', 'test msg');
console.log('connected to socket',{ username, room })
socket.on('message', (message) => {
    console.log(message);
});