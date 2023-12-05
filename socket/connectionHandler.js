const Game = require('../game/GameManager');


module.exports = (socket, io) => {
    // Handle connection events
    socket.on('joinGame', (gameId, sessionId, username) => {
        if(!Game.validateUserSession(sessionId, username)){
            socket.emit('joinGameError', {message: 'Invalid sessionId and username combination.'});
            return;
        }
        socket.join(gameId);
        const game = Game.getGame(gameId);
        if(game){
            const gameState = game.getGameState();
            io.to(gameId).emit('gameUpdate', { gameState });
        }
    });

    socket.on('submitGuess', (gameId, sessionId, username, guess) => {
        if(!Game.validateUserSession(sessionId, username)){
            socket.emit('submitGuessError', {message: 'Invalid sessionId and username combination.', allowNewGuess: true});
            return;
        }
        const game = Game.getGame(gameId);
        if (game) {
            game.addGuess(username, guess);
            const gameState = game.getGameState();
            io.to(gameId).emit('gameUpdate', gameState);
        }
    });
};
