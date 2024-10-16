const http = require("http");
const path = require("path");
const express = require("express");
const app = express();
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
const cors=require('cors');
app.use(cors);

// Serve static files from the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

io.on("connection", (socket) => {
    socket.on('user-message',(message)=>{
       io.emit("message",message);
    });
});

server.listen(9000,'0.0.0.0', () => {
    console.log("server is running on port 9000");
});