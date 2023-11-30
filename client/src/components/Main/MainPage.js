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
        switch (selectedMenu) {
            case 'settings':
                return <Settings />;
            case 'friends':
                return <Friends />;
            case 'chat':
                return <Chat />;
            case 'main':
            default:
                return <Menu {...userData} />;
        }
    };

    const onSelectMenu = (menu) => {
        setSelectedMenu(menu);
    };

    const onLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    }

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
