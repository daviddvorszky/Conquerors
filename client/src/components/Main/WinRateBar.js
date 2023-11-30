import style from './WinRateBar.module.css';
const WinRateBar = ({ winRate }) => {
    const barWidth = `${winRate*100}%`;

    return (
        <div>
            Win Rate: {(winRate*100).toFixed(2)}%
            <div className={style.winRateBarContainer}>
                <div className={style.winRateBar} style={{ width: barWidth }}></div>
            </div>
        </div>
    );
};

export default WinRateBar;
