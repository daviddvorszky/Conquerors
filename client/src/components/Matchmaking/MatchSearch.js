// MatchSearch.js in your React app
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import getApiUrl from '../../utils/apiConfig';
import { useNavigate } from 'react-router-dom';

const MatchSearch = () => {
    const [isSearching, setIsSearching] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);
    const [timerIntervalId, setTimerIntervalId] = useState(null);
    const navigate = useNavigate();

    const startSearch = async () => {
        setIsSearching(true);
        setElapsedTime(0);
        const searchStartTime = Date.now();

        const timerInterval = setInterval(() => {
            const currentTime = Date.now();
            const timeElapsed = Math.floor((currentTime - searchStartTime) / 1000);
            setElapsedTime(timeElapsed);
        }, 1000);

        setTimerIntervalId(timerInterval);
        try {
            const response = await axios.post(`${getApiUrl()}/api/matchmaking/search-match`, {}, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            });
            // Handle match found
            console.log('Match found:', response.data);
            const gameId = response.data.gameId;
            const players = response.data.players;
            navigate('/game', { state: { gameId, players } });
        } catch (error) {
            // Handle errors
            console.error('Error during match search:', error);
        } finally {
            setIsSearching(false);
        }
    };

    const cancelSearch = async () => {
        try {
            const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/matchmaking/cancel-search`, {}, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            });
            // Handle match found
            console.log('Match cancelled:', response.data);
            setIsSearching(false);
            if (timerIntervalId) {
                clearInterval(timerIntervalId);
            }
        } catch (error) {
            // Handle errors
            console.error('Error cancelling search:', error);
        }
    }

    useEffect(() => {
        const handleBeforeUnload = async (e) => {
            if (isSearching) {
                e.preventDefault();
                await cancelSearch();
            }
        };

        window.addEventListener('beforeunload', handleBeforeUnload);

        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
        };
    }, [isSearching]);

    useEffect(() => {
        return () => {
            if (timerIntervalId) {
                clearInterval(timerIntervalId);
            }
        };
    }, [timerIntervalId]);

    return (
        <div>
            {isSearching ? (
                <div>
                    <p>Searching for a match... Time elapsed: {elapsedTime} seconds</p>
                    <button onClick={cancelSearch}>Cancel Search</button>
                </div>
            ) : (
                <button onClick={startSearch}>Start Match Search</button>
            )}
        </div>
    );
};

export default MatchSearch;
