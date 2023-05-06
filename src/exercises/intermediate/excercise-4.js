// Crea una aplicación Node.js que utilice el módulo Socket.io para implementar una comunicación en tiempo real entre clientes y servidor.

// aqui creo mi servidor.
const express = require("express");
// const app = require("../../app");
const { Server: SocketServer } = require("socket.io");
const http = require("http");

// morgan middleware
const morgan = require("morgan");
// middleware cors
const cors = require("cors");


const appDos = express();
const server = http.createServer(appDos);
const io = new SocketServer(server, {
   cors: {
      origin: "http://localhost:5173",
   }
});
// // midleware cors
appDos.use(cors());
// middleware morgan
appDos.use(morgan("dev"));
// middleware para usar json
appDos.use(express.json());



io.on('connection', (socket) => {

   console.log(`User ${socket.id} connected`);
})

server.listen(4000, () => {
   console.log("Server init on port 4000");
});






