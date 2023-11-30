import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import NavigationMenu from './NavigationMenu';
import LogoutButton from './LogoutButton';
import Chat from './Chat';
import Friends from './Friends';
import Menu from './Menu';
import Settings from './Settings';

import useAuth from '../../hooks/useAuth';
import styles from './MainPage.module.css';

import axios from 'axios';
import getApiUrl from '../../utils/apiConfig';

const MainPage = () => {
    const navigate = useNavigate();

    const [selectedMenu, setSelectedMenu] = useState('main');

    const user = useAuth();
    const [userData, setUserData] = useState({
        username: "",
        rating: 0,
        gamesPlayed: 0,
        gamesWon: 0,
        winRate: 0
    });

    useEffect(() => {
        if (user) {
            setUserData({
                username: user.username,
                rating: user.skill_level,
                gamesPlayed: user.games_played,
                gamesWon: user.games_won,
            });
        }
    }, [user]);

    const renderContent = () => {
        if (selectedMenu !== 'main') cancelSearch();
        switch (selectedMenu) {
            case 'settings':
                return <Settings />;
            case 'friends':
                return <Friends />;
            case 'chat':
                return <Chat />;
            case 'main':
            default:
                return <Menu
                    {...userData}
                    isSearching={isSearching}
                    elapsedTime={elapsedTime}
                    startSearch={startSearch}
                    cancelSearch={cancelSearch}
                />;
        }
    };

    const onSelectMenu = (menu) => {
        setSelectedMenu(menu);
    };

    const onLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    }


    const [isSearching, setIsSearching] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);
    const [timerIntervalId, setTimerIntervalId] = useState(null);

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
        <div className={styles.container}>
            <div className={styles.header}>
                <NavigationMenu onSelectMenu={onSelectMenu} />
                <LogoutButton className={styles.logoutButton} onLogout={onLogout} />
            </div>
            {renderContent()}
        </div>
    );
};

export default MainPage;
