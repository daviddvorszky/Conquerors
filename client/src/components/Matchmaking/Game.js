import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import { useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';


const socket = io('http://localhost:3001'); // Adjust as needed

const Game = () => {
    const username = useAuth();
    const location = useLocation();
    const { gameId, players } = location.state || {};
    const [guess, setGuess] = useState('');
    const [guessed, setGuessed] = useState(false);
    const [gameState, setGameState] = useState({});
    const [test, setTest] = useState(0);

    const navigate = useNavigate();

    const getStatusText = (playerGuessed) => {
        return playerGuessed ? "Guessed" : "Thinking";
    };

    useEffect(() => {
        socket.emit('joinGame', gameId, username);
    }, [gameId, username]);

    const submitGuess = () => {
        setGuessed(true)
        socket.emit('submitGuess', gameId, username, guess);
    };

    const backToMainPage = () => {
        navigate('/');
    }

    useEffect(() => {
        console.log('useEffect is running');
        
        function handler(state) {
            console.log('gameUpdate event received:', state);
            setGameState((prevGameState) => ({
                ...prevGameState,
                ...state
            }));
            setTest(test+1);
            console.log(test);
        }
        
        socket.on('gameUpdate', handler);
    
        return () => {
            socket.off('gameUpdate');
            console.log('useEffect cleanup');
        };
    }, [gameState, test]);

    return (
        <div>
            <input type="number" value={guess} onChange={(e) => setGuess(e.target.value)} />
            {!guessed && <button onClick={submitGuess}>Submit Guess</button>}
            <p>{players[0]}: {getStatusText(gameState.player1guessed)}</p>
            <p>{players[1]}: {getStatusText(gameState.player2guessed)}</p>
            <p>{players[2]}: {getStatusText(gameState.player3guessed)}</p>
            {gameState.isComplete && <p>{gameState.winner} won!</p>}
            {gameState.isComplete && <button onClick={e => backToMainPage(e)}>Back to Main Page</button>}
            {test&&<p>Test: {test}</p>}
            {true&&<p>isComplete: {gameState.isComplete}</p>}
        </div>
    );

};

export default Game;
