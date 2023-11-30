const { Server } = require('socket.io');
const connectionHandler = require('./connectionHandler');

const setupWebSocket = (server) => {
    const io = new Server(server, {
        cors: {
            origin: "http://localhost:3000", // Client's URL
            methods: ["GET", "POST"],
            allowedHeaders: ["my-custom-header"],
            credentials: true
        }
    });
    io.on('connection', socket => connectionHandler(socket, io));
};

module.exports = setupWebSocket;
