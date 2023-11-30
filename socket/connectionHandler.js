const Game = require('../game/GameManager');

module.exports = (socket, io) => {
    // Handle connection events
    socket.on('joinGame', (gameId) => {
        socket.join(gameId);
        const game = Game.getGame(gameId);
        if(game){
            const gameState = game.getGameState();
            io.to(gameId).emit('gameUpdate', { gameState });
        }
    });

    socket.on('submitGuess', (gameId, username, guess) => {
        const game = Game.getGame(gameId);
        if (game) {
            game.addGuess(username, guess);
            const gameState = game.getGameState();
            io.to(gameId).emit('gameUpdate', gameState);
        }
    });
};
