import styles from './MainPage.module.css';
import SearchButton from './SearchButton';
import UserInfo from './UserInfo';
import WelcomeMessage from './WelcomeMessage';
const Menu = (userData) => {

    console.log(userData);


    return (
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
    );
}

export default Menu;