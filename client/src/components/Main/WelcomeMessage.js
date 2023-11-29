import styles from './MainMenu.module.css';
const WelcomeMessage = ({ username }) => {
    return (
        <div className={styles.welcomeText}>
            <h1>Welcome, {username}!</h1>
            <p>Are you ready for a legendary battle?</p>
        </div>
    );
};

export default WelcomeMessage;
