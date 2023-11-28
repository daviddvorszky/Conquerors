class Game {
    constructor(gameId, players) {
        this.gameId = gameId;
        this.players = players; // Array of player objects or IDs
        this.guesses = new Map(); // To store players' guesses
        this.isComplete = false;
        this.winner = null;
    }

    addGuess(username, guess) {
        this.guesses.set(username, guess);
        if (this.guesses.size === this.players.length) {
            this.determineWinner();
        }
    }

    getGameState() {
        return {
            player1guessed: Array.from(this.guesses.keys()).some(key => key.username == this.players[0].username),
            player2guessed: Array.from(this.guesses.keys()).some(key => key.username == this.players[1].username),
            player3guessed: Array.from(this.guesses.keys()).some(key => key.username == this.players[2].username),
            winner: this.winner,
            isComplete: this.isComplete
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
        let x = this.guesses.get(Array.from(this.guesses.keys()).find(key => key.username === this.players[0].username));
        let y = this.guesses.get(Array.from(this.guesses.keys()).find(key => key.username === this.players[1].username));
        let z = this.guesses.get(Array.from(this.guesses.keys()).find(key => key.username === this.players[2].username));
        console.log(x + " " + y + " " + z);
        const w = this.findMiddleNumber(x, y, z);
        for (let [key, value] of this.guesses.entries()) {
            if (value === w)
                this.winner = key.username;
        }
        this.isComplete = true;
    }
}

module.exports = Game;
