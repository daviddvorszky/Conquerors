const joinGameHandler = require('./joinGameHandler');
const submitGuessHandler = require('./submitGuessHandler');
const selectCountyHandler = require('./selectCountyHandler');

module.exports = (socket, io) => {
    socket.on('joinGame', (gameId, sessionId, username) => {
        joinGameHandler(socket, io, gameId, sessionId, username);
    });

    socket.on('submitGuess', (gameId, sessionId, username, guess) => {
        submitGuessHandler(socket, io, gameId, sessionId, username, guess);
    });

    socket.on('selectCounty', (gameId, sessionId, username, countyId) => {
        selectCountyHandler(socket, io, gameId, sessionId, username, countyId);
    });
};
