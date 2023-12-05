const express = require('express');
const router = express.Router();
const authenticateToken = require('../middlewares/authenticateToken');
const gameManager = require('../game/GameManager');

let matchQueue = [];

// Endpoint to start match search
router.post('/search-match', authenticateToken, async (req, res) => {
    const userId = req.user.user_id;
    const username = req.user.username;
    const skill_level = req.user.skill_level;


    const isAlreadyInQueue = matchQueue.some(player => player.userId === userId);
    if(isAlreadyInQueue){
        res.status(400).json({ message: "Already in the match search queue." });
    }

    matchQueue.push({ userId, username, skill_level, res, matched: false });

    // Matchmaking logic
    const matchSize = 3; // Number of players per match
    const groups = [];
    
    // Sorting players by skill level
    matchQueue.sort((a, b) => a.skill_level - b.skill_level);

    // Grouping players
    for (let i = 0; i < matchQueue.length; i += matchSize) {
        if (matchQueue[i + matchSize - 1]) {
            groups.push(matchQueue.slice(i, i + matchSize));
        }
    }

    // Mark players as matched and create match IDs
    groups.forEach(group => {
        const matchId = gameManager.createGame(group.filter(player => player.username));
        group.forEach(player => {
            const playerInQueue = matchQueue.find(p => p.userId === player.userId);
            if (playerInQueue) {
                playerInQueue.matched = true;
                playerInQueue.matchId = matchId; // Assign match ID
                playerInQueue.sessionId = gameManager.createUserSession(player.username);
            }
        });
    });

    // Filter out matched players
    matchQueue = matchQueue.filter(player => !player.matched);

    // Notify players about their matches
    groups.forEach(group => {
        group.forEach(player => {
            player.res.json({ gameId: player.matchId, sessionId: player.sessionId, players: group.map(p => p.username) });
        });
    });
});


// Endpoint to cancel match search
router.post('/cancel-search', authenticateToken, (req, res) => {
    const userId = req.user.user_id;
    matchQueue = matchQueue.filter(player => player.userId !== userId);
    res.status(200).send('Search cancelled');
});

module.exports = router;
