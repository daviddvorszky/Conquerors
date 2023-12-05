const Game = require('./Game');
const { v4: uuidv4 } = require('uuid');

class GameManager {
    constructor() {
        this.activeGames = {};
        this.userSessions = {};
    }

    createGame(players) {
        const gameId = this.generateGUID();
        const newGame = new Game(gameId, players);
        this.activeGames[gameId] = newGame;
        return gameId;
    }

    createUserSession(username){
        const sessionId = this.generateGUID();
        this.userSessions[sessionId] = username;
        return sessionId;
    }

    generateGUID() {
        const guid = uuidv4();
        return guid;
    }

    getGame(gameId) {
        return this.activeGames[gameId];
    }

    validateUserSession(sessionId, username){
        return username == this.userSessions[sessionId];
    }
}

module.exports = new GameManager();
