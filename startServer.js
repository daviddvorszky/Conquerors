const http = require('http');
const  app  = require('./server');
const setupWebSocket = require('./socket/setupWebSocket');

const server = http.createServer(app);
setupWebSocket(server);

const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
