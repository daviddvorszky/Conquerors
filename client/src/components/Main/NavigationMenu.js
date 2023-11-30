import styles from './MainPage.module.css';
const NavigationMenu = ({ onSelectMenu }) => {
    return (
        <nav className={styles.navigationMenu}>
            <button className={styles.navButton} onClick={() => onSelectMenu('main')}>Menu</button>
            <button className={styles.navButton} onClick={() => onSelectMenu('settings')}>Settings</button>
            <button className={styles.navButton} onClick={() => onSelectMenu('friends')}>Friends</button>
            <button className={styles.navButton} onClick={() => onSelectMenu('chat')}>Chat</button>
        </nav>
    );
};

export default NavigationMenu;
