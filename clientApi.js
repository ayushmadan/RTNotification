var io = require('socket.io-client');
const bodyParser = require('body-parser');
var socket = io.connect('http://localhost:3000', {reconnect: true});


socket.on('connect', function (socket) {
    console.log('Connected!');
});

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
let username = 'Global Server';
let room = "global";
socket.emit('joinRoom', { username, room });

app.get('/',(req,res) => {
    socket.emit('message', 'Message from clientApi server');
    res.send('connected to server')
})

app.post('/notify',(req,res) => {
    console.log(req.body)
    var { room, message } = req.body;
    console.log({room:room, message:message});
    socket.emit('sendMessage',{room:room,msg:message})
    res.send("Notification Sent")
})

socket.on('message', (message) => {
    console.log(message);
});



app.listen(PORT, () => console.log(`Server running on port ${PORT}`));