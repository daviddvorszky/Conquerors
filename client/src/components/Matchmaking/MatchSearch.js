import React from 'react';
import styles from '../Main/MainPage.module.css'

const MatchSearch = ({isSearching, elapsedTime, cancelSearch, startSearch}) => {
    

    return (
        <div>
            {isSearching ? (
                <div>
                    <p>Searching for a match... Time elapsed: {elapsedTime} seconds</p>
                    <button onClick={cancelSearch}>Cancel Search</button>
                </div>
            ) : (
                <button className={styles.searchMatchButton} onClick={startSearch}>Start Match Search</button>
            )}
        </div>
    );
};

export default MatchSearch;
