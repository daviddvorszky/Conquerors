import WinRateBar from "./WinRateBar";
import styles from './UserInfo.module.css';
import defaultProfilePicture from '../../assets/default_profile_picture.png';
import { ReactComponent as InfoIcon } from '../../assets/info-icon.svg';

const UserInfo = ({ username, rating, gamesPlayed, gamesWon }) => {
    const winRate = gamesPlayed > 0 ? gamesWon / gamesPlayed : 0;
    return (
        <div>
            <div className={styles.userInfo}>
                <img className={styles.defaultProfilePicture} src={defaultProfilePicture} alt={`${username}'s profile`} />
                <h3 className={styles.username}>{username}</h3>
            </div>
            <div>
                <p>
                    Rating: {rating}
                    <span className={styles.infoIcon}>
                        <InfoIcon />
                        <span className={styles.tooltip}>
                            Skill rating helps match you with similarly skilled opponents. Winning gains points,
                            while losing deducts points. The greater the skill difference, the more points you can win or lose.
                        </span>
                    </span>
                </p>
                <WinRateBar winRate={winRate} />
                <p>Games played: {gamesPlayed}</p>
                <p>Games won: {gamesWon}</p>
            </div>
        </div>
    );
};

export default UserInfo;