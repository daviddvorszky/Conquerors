import React, { useEffect, useState } from 'react';
import UserInfo from './UserInfo';
import WelcomeMessage from './WelcomeMessage';
import NavigationMenu from './NavigationMenu';
import LogoutButton from './LogoutButton';
import SearchButton from './SearchButton';
import useAuth from '../../hooks/useAuth';
import styles from './MainMenu.module.css';

const MainMenu = ({ onLogout }) => {

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

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <NavigationMenu />
                <LogoutButton className={styles.logoutButton} onLogout={onLogout} />
            </div>
            <div className={styles.mainContent}>
                <div className={styles.leftSection}>
                    <WelcomeMessage username={userData.username} />
                    <SearchButton />
                </div>
                <div className={styles.rightSection}>
                    <UserInfo
                        username={userData.username}
                        rating={userData.rating}
                        winRate={userData.winRate}
                        gamesPlayed={userData.gamesPlayed}
                        gamesWon={userData.gamesWon}
                    />
                </div>
            </div>
        </div>
    );
};

export default MainMenu;
