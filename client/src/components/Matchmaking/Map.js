import React from 'react';
import './Map.css';
import hungary from '../../assets/magyarorszag.svg';
import {countyPaths} from '../../constants/gameConstants';
import PropTypes from 'prop-types';

const Map = ({ countyClassNames, handleClick }) => {
    return (
        <div className={"Map"}>
            <svg style={{ position: 'absolute' }} xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 1250 788">
                {Object.keys(countyPaths).map(countyId => (
                    <path 
                        key={countyId}
                        onClick={handleClick} 
                        id={countyId} 
                        className={countyClassNames[countyId]} 
                        d={countyPaths[countyId]}
                    />
                ))}
            </svg>
            <img style={{ position: 'absolute', pointerEvents: 'none', width: "100%" }} src={hungary} alt="Hungary map" />
        </div>
    );
};

Map.propTypes = {
    countyClassNames: PropTypes.object.isRequired,
    handleClick: PropTypes.func.isRequired,
};


export default Map;
