// MatchSearch.js in your React app
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import getApiUrl from '../../utils/apiConfig';

const MatchSearch = () => {
    const [isSearching, setIsSearching] = useState(false);

    const startSearch = async () => {
        setIsSearching(true);
        try {
            const response = await axios.post(`${getApiUrl()}/api/matchmaking/search-match`, {}, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            });
            // Handle match found
            console.log('Match found:', response.data);
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

    return (
        <div>
            {isSearching ? (
                <div>
                    <p>Searching for a match...</p>
                    <button onClick={cancelSearch}>Cancel Search</button>
                </div>
            ) : (
                <button onClick={startSearch}>Start Match Search</button>
            )}
        </div>
    );
};

export default MatchSearch;
