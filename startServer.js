const app = require('./server');
const http = require('http');
const server = http.createServer(app);
const { Server } = require('socket.io');
const io = new Server(server, {
  cors: {
      origin: "http://localhost:3000",  // Client URL
      methods: ["GET", "POST"]
  }
});

const PORT = process.env.PORT || 3001;

io.on('connection', (socket) => {
  console.log('A user connected');

  socket.on('send number', (number) => {
    const doubled = number * 2;
    socket.emit('number doubled', doubled);
  });

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
