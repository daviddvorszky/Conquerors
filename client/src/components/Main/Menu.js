import MatchSearch from '../Matchmaking/MatchSearch';
import styles from './MainPage.module.css';
import UserInfo from './UserInfo';
import WelcomeMessage from './WelcomeMessage';
const Menu = ({ isSearching, username, rating, gamesPlayed, gamesWon, winRate, elapsedTime, startSearch, cancelSearch }) => {


    return (
        <div className={styles.mainContent}>
            <div className={styles.leftSection}>
                <WelcomeMessage username={username} />
                <MatchSearch isSearching={isSearching} elapsedTime={elapsedTime} startSearch={startSearch} cancelSearch={cancelSearch} />
            </div>
            <div className={styles.rightSection}>
                <UserInfo
                    username={username}
                    rating={rating}
                    winRate={winRate}
                    gamesPlayed={gamesPlayed}
                    gamesWon={gamesWon}
                />
            </div>
        </div>
    );
}

export default Menu;