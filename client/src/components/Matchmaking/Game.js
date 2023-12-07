import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Map from './Map';
import useSocket from '../../hooks/useSocket';
import useSocketEvent from '../../hooks/useSocketEvent';
import { GameStates, counties, initialCountyClassNames } from '../../constants/gameConstants';


const Game = () => {
    const user = useAuth();
    const location = useLocation();
    const { gameId, sessionId, players } = location.state || {};
    const [gameState, setGameState] = useState({})
    const [countyClassNames, setCountyClassNames] = useState(initialCountyClassNames);

    const navigate = useNavigate();
    const socket = useSocket('http://localhost:3001');

    useEffect(() => {
        if (socket && user) {
            socket.emit('joinGame', gameId, sessionId, user.username);
        }
    }, [gameId, sessionId, user]);

    const backToMainPage = () => {
        navigate('/');
    }

    const handleGameUpdate = (state) => {
        setGameState((prevGameState) => ({
            ...prevGameState,
            ...state
        }));
    }

    const handleCountyTaken = ({ countyId, playerId }) => {
        updateCounty(countyId, playerId);
    }

    useSocketEvent(socket, 'gameUpdate', handleGameUpdate);
    useSocketEvent(socket, 'countyTaken', handleCountyTaken);


    const playerColorMap = {
        0: 'Red',
        1: 'Blue',
        2: 'Green'
    };
    
    const updateCounty = (countyId, playerId) => {
        const newColor = playerColorMap[playerId];
        if (!newColor) {
            console.error("Invalid player ID: " + playerId);
            return;
        }
    
        setCountyClassNames(prevClassNames => {
            const oldClass = prevClassNames[countyId];
            const oldColor = oldClass.includes('To') ? oldClass.split('To')[1] : oldClass;
            return oldColor === newColor ? prevClassNames : {
                ...prevClassNames,
                [countyId]: `${oldColor}To${newColor}`
            };
        });
    }
    const handleClick = event => {
        console.log(event.currentTarget.id);
        socket.emit('selectCounty', gameId, sessionId, user.username, event.currentTarget.id);
    };


    return (
        <div>
            {gameState.gameState === GameStates.FINISHED && <p>{gameState.winner} won!</p>}
            {gameState.gameState === GameStates.FINISHED && <button onClick={e => backToMainPage(e)}>Back to Main Page</button>}
            {<Map countyClassNames={countyClassNames} handleClick={handleClick} />}
        </div>
    );

};

export default Game;
