const Game = require('../game/GameManager');

function handleSubmitGuess(socket, io, gameId, sessionId, username, guess) {
    if (!Game.validateUserSession(sessionId, username)) {
        socket.emit('submitGuessError', { message: 'Invalid sessionId and username combination.', allowNewGuess: true });
        return;
    }
    const game = Game.getGame(gameId);
    if (game) {
        game.addGuess(username, guess);
        const gameState = game.getGameState();
        io.to(gameId).emit('gameUpdate', gameState);
    }
}

module.exports = handleSubmitGuess;
