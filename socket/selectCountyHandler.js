const Game = require('../game/GameManager');

function handleSelectCounty(socket, io, gameId, sessionId, username, countyId) {
    if (!Game.validateUserSession(sessionId, username)) {
        socket.emit('submitGuessError', { message: 'Invalid sessionId and username combination.', allowNewGuess: true });
        return;
    }
    const game = Game.getGame(gameId);
    if (game) {
        let playerId = -1;
        for(let i =0; i < 3; i++){
            if (game.players[i].username === username){
                playerId = i;
            }
        }
        io.to(gameId).emit('countyTaken', {countyId: countyId, playerId: playerId});
    }
}

module.exports = handleSelectCounty;
