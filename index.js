const express = require('express');
const http = require('http');
const SocketIO = require('socket.io')

const app = express();
const server = http.createServer(app);
const io = SocketIO(server);

app.use(express.static('./public'));

io.on('connection',(socket)=>{
    console.log("Socket Conneted",socket.id);
})

server.listen(5678,(req,res)=>{console.log(`Server started running on PORT : 5678`)});