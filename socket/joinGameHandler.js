const Game = require('../game/GameManager');

function handleJoinGame(socket, io, gameId, sessionId, username) {
    if (!Game.validateUserSession(sessionId, username)) {
        socket.emit('joinGameError', { message: 'Invalid sessionId and username combination.' });
        return;
    }
    socket.join(gameId);
    const game = Game.getGame(gameId);
    if (game) {
        const gameState = game.getGameState();
        io.to(gameId).emit('gameUpdate', { gameState });
    }
}

module.exports = handleJoinGame;
