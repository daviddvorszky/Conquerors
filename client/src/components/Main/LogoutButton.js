import styles from './MainPage.module.css';
const LogoutButton = ({ onLogout }) => {
    return (
        <button className={styles.logoutButton} onClick={onLogout}>
            Logout
        </button>
    );
};

export default LogoutButton;