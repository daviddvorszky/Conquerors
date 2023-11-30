const Game = require('./Game');
const { v4: uuidv4 } = require('uuid');

class GameManager {
    constructor() {
        this.activeGames = {};
    }

    createGame(players) {
        const gameId = this.generateGameId();
        const newGame = new Game(gameId, players);
        this.activeGames[gameId] = newGame;
        return gameId;
    }

    generateGameId() {
        const matchId = uuidv4();
        return matchId;
    }

    getGame(gameId) {
        return this.activeGames[gameId];
    }
}

module.exports = new GameManager();
