import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import { useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Map from './Map';


const socket = io('http://localhost:3001'); // Adjust as needed
const GameStates = {
    WAITING_FOR_PLAYERS: 'WAITING_FOR_PLAYERS',
    CHOOSING_CAPITAL: 'CHOOSING_CAPITAL',
    EXPANSION: 'EXPANSION',
    FIGHT: 'FIGHT',
    FINISHED: 'FINISHED',
};

const Game = () => {
    const user = useAuth();
    const location = useLocation();
    const { gameId, sessionId, players } = location.state || {};
    const [guess, setGuess] = useState('');
    const [guessed, setGuessed] = useState(false);
    const [gameState, setGameState] = useState({})
    const [countyClassNames, setCountyClassNames] = useState({
        'gyor-moson-sopron': 'Empty',
        'vas': 'Empty',
        'veszprem': 'Empty',
        'komarom-esztergom': 'Empty',
        'zala': 'Empty',
        'somogy': 'Empty',
        'fejer': 'Empty',
        'pest': 'Empty',
        'baranya': 'Empty',
        'tolna': 'Empty',
        'bacs-kiskun': 'Empty',
        'nograd': 'Empty',
        'heves': 'Empty',
        'jasz-nagykun-szolnok': 'Empty',
        'csongrad-csanad': 'Empty',
        'borsod-abauj-zemplen': 'Empty',
        'bekes': 'Empty',
        'hajdu-bihar': 'Empty',
        'szabolcs-szatmar-bereg': 'Empty',
    });

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

    const updateCounty = (countyId, playerId) => {
        let oldColor = countyClassNames[countyId];
        if(oldColor !== "Empty"){
            oldColor = oldColor.slice(oldColor.indexOf('To') + 2);
        }
        let newColor = "";
        switch(playerId){
            case 0: newColor = "Red"; break;
            case 1: newColor = "Blue"; break;
            case 2: newColor = "Green"; break;
            default: console.error("Something's wrong:" + playerId);
        }
        if(oldColor !== newColor){
            setCountyClassNames((prevClassNames) => ({
                ...prevClassNames,
                [countyId]: (oldColor + "To" + newColor)
            }), [countyClassNames]);
        }
    }
    const handleClick = event => {
        console.log(event.currentTarget.id);
        socket.emit('selectCounty', gameId, sessionId, user.username, event.currentTarget.id);
    };
    
    useEffect(() => {
        function handleCountyTaken({countyId, playerId}){
            updateCounty(countyId, playerId);
        }
        socket.on('countyTaken', handleCountyTaken);
        return () => {socket.off('countyTaken');}
    });
    

    return (
        <div>
            <input type="number" value={guess} onChange={(e) => setGuess(e.target.value)} />
            {!guessed && <button onClick={submitGuess}>Submit Guess</button>}
            <p>{players[0]}: {getStatusText(gameState.player1guessed)}</p>
            <p>{players[1]}: {getStatusText(gameState.player2guessed)}</p>
            <p>{players[2]}: {getStatusText(gameState.player3guessed)}</p>
            {gameState.gameState === GameStates.FINISHED && <p>{gameState.winner} won!</p>}
            {gameState.gameState === GameStates.FINISHED && <button onClick={e => backToMainPage(e)}>Back to Main Page</button>}
            {<Map countyClassNames={countyClassNames} handleClick={handleClick}/>}
        </div>
    );

};

export default Game;
