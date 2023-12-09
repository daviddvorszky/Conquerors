const GameStates = {
    WAITING_FOR_PLAYERS: 'WAITING_FOR_PLAYERS',
    CHOOSING_CAPITAL: 'CHOOSING_CAPITAL',
    EXPANSION: 'EXPANSION',
    FIGHT: 'FIGHT',
    FINISHED: 'FINISHED',
};

const countyMap = new Map();
countyMap.set('gyor-moson-sopron', ['vas', 'veszprem', 'komarom-esztergom']);
countyMap.set('vas', ['gyor-moson-sopron', 'veszprem', 'zala']);
countyMap.set('veszprem', ['gyor-moson-sopron', 'vas', 'komarom-esztergom', 'zala', 'zala', 'somogy', 'fejer']);
countyMap.set('komarom-esztergom', ['gyor-moson-sopron', 'veszprem', 'fejer',  'pest']);
countyMap.set('zala', ['vas', 'veszprem', 'somogy']);
countyMap.set('somogy', ['veszprem', 'zala', 'fejer', 'baranya', 'tolna']);
countyMap.set('fejer', ['veszprem', 'komarom-esztergom', 'somogy', 'pest', 'tolna', 'bacs-kiskun']);
countyMap.set('pest', ['komarom-esztergom', 'fejer', 'bacs-kiskun', 'nograd', 'heves', 'jasz-nagykun-szolnok']);
countyMap.set('baranya', ['somogy', 'tolna', 'bacs-kiskun']);
countyMap.set('tolna', ['somogy', 'fejer', 'baranya', 'bacs-kiskun']);
countyMap.set('bacs-kiskun', ['fejer', 'pest', 'baranya', 'tolna', 'jasz-nagykun-szolnok', 'csongor-csanad']);
countyMap.set('nograd', ['pest', 'heves', 'borsod-abauj-zemplen']);
countyMap.set('heves', ['pest', 'nograd', 'jasz-nagykun-szolnok', 'borsod-abauj-zemplen']);
countyMap.set('jasz-nagykun-szolnok', ['pest', 'bacs-kiskun', 'heves', 'csongor-csanad', 'borsod-abauj-zemplen', 'bekes', 'hadju-bihar']);
countyMap.set('csongrad-csanad', ['bacs-kiskun', 'jasz-nagykun-szolnok', 'bekes']);
countyMap.set('borsod-abauj-zemplen', ['nograd', 'heves', 'jasz-nagykun-szolnok', 'hajdu-bihar', 'szabolcs-szatmar-bereg']);
countyMap.set('bekes', ['jasz-nagykun-szolnok', 'csongor-csanad', 'hajdu-bihar']);
countyMap.set('hajdu-bihar', ['jasz-nagykun-szolnok', 'borsod-abauj-zemplen', 'bekes', 'szabolcs-szatmar-bereg']);
countyMap.set('szabolcs-szatmar-bereg', ['borsod-abauj-zemplen', 'hajdu-bihar']);

class Game {
    constructor(gameId, players) {
        this.gameId = gameId;
        this.players = players;
        this.guesses = new Map(); // To store players' guesses
        this.winner = null;
        this.currentState = GameStates.WAITING_FOR_PLAYERS;
    }

    areCountiesNeighbors(county1, county2) {
        const neighbors = countyMap.get(county1);
        return neighbors && neighbors.includes(county2);
    }

    addGuess(username, guess) {
        this.guesses.set(username, guess);
        if (this.guesses.size === this.players.length) {
            this.determineWinner();
        }
    }

    getGameState() {
        return {
            player1guessed: Array.from(this.guesses.keys()).some(username => username == this.players[0].username),
            player2guessed: Array.from(this.guesses.keys()).some(username => username == this.players[1].username),
            player3guessed: Array.from(this.guesses.keys()).some(username => username == this.players[2].username),
            winner: this.winner,
            gameState: this.currentState
        };
    }

    findMiddleNumber(x, y, z) {
        if ((x >= y && x <= z) || (x <= y && x >= z)) {
            return x;
        } else if ((y >= x && y <= z) || (y <= x && y >= z)) {
            return y;
        } else {
            return z;
        }
    }

    determineWinner() {
        let x = this.guesses.get(Array.from(this.guesses.keys()).find(username => username === this.players[0].username));
        let y = this.guesses.get(Array.from(this.guesses.keys()).find(username => username === this.players[1].username));
        let z = this.guesses.get(Array.from(this.guesses.keys()).find(username => username === this.players[2].username));
        console.log(x + " " + y + " " + z);
        const w = this.findMiddleNumber(x, y, z);
        for (let [key, value] of this.guesses.entries()) {
            if (value === w)
                this.winner = key;
        }
        this.currentState = GameStates.FINISHED;
    }
}

module.exports = Game;
