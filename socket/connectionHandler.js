const joinGameHandler = require('./joinGameHandler');
const submitGuessHandler = require('./submitGuessHandler');

module.exports = (socket, io) => {
    socket.on('joinGame', (gameId, sessionId, username) => {
        joinGameHandler(socket, io, gameId, sessionId, username);
    });

    socket.on('submitGuess', (gameId, sessionId, username, guess) => {
        submitGuessHandler(socket, io, gameId, sessionId, username, guess);
    });
};
