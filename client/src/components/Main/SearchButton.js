import styles from './MainMenu.module.css';
const SearchButton = ({ onSearch }) => {
    return (
        <button className={styles.searchMatchButton} onClick={onSearch}>
            Search for a Match
        </button>
    );
};

export default SearchButton;
