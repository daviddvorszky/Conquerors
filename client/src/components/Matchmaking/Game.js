import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import { useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';


const socket = io('http://localhost:3001'); // Adjust as needed

const Game = () => {
    const user = useAuth();
    const location = useLocation();
    const { gameId, sessionId, players } = location.state || {};
    const [guess, setGuess] = useState('');
    const [guessed, setGuessed] = useState(false);
    const [gameState, setGameState] = useState({})

    const navigate = useNavigate();

    const getStatusText = (playerGuessed) => {
        return playerGuessed ? "Guessed" : "Thinking";
    };

    useEffect(() => {
        if(user){
            socket.emit('joinGame', gameId, sessionId, user.username);
        }
    }, [gameId, sessionId, user]);

    const submitGuess = () => {
        setGuessed(true)
        socket.emit('submitGuess', gameId, sessionId, user.username, guess);
    };

    const backToMainPage = () => {
        navigate('/');
    }

    useEffect(() => {
        function handleUpdate(state) {
            console.log(state);
            setGameState((prevGameState) => ({
                ...prevGameState,
                ...state
            }));
        }
        socket.on('gameUpdate', handleUpdate);
    
        return () => {
            socket.off('gameUpdate');
        };
    }, [gameState]);

    useEffect(() => {
        function handleError({message, allowNewGuess}){
            if(allowNewGuess) setGuessed(false);
        }
        socket.on('submitGuessError', handleError);
        return () => {
            socket.off('submitGuessError');
        }
    }, [guessed]);

    return (
        <div>
            <input type="number" value={guess} onChange={(e) => setGuess(e.target.value)} />
            {!guessed && <button onClick={submitGuess}>Submit Guess</button>}
            <p>{players[0]}: {getStatusText(gameState.player1guessed)}</p>
            <p>{players[1]}: {getStatusText(gameState.player2guessed)}</p>
            <p>{players[2]}: {getStatusText(gameState.player3guessed)}</p>
            {gameState.isComplete && <p>{gameState.winner} won!</p>}
            {gameState.isComplete && <button onClick={e => backToMainPage(e)}>Back to Main Page</button>}
        </div>
    );

};

export default Game;
