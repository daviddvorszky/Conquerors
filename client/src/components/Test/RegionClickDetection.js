import React, { useState } from 'react';

const RegionClickDetection = () => {
  const [selectedShape, setSelectedShape] = useState(null);

  const handleClick = (id, color) => {
    setSelectedShape(color);
  };

  return (
    <div className="RegionClickDetection">
      <svg xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 400 400">
        <path
          d="M100,50 L200,50 L200,150 L100,150 Z"
          fill="blue"
          onClick={() => handleClick(1, 'blue')}
        />
        <path
          d="M250,50 L350,50 L350,150 L250,150 Z"
          fill="green"
          onClick={() => handleClick(2, 'green')}
        />
        <path
          d="M150,200 L250,200 L250,300 L150,300 Z"
          fill="red"
          onClick={() => handleClick(3, 'red')}
        />
        {/* Define a pentagon */}
        <path
          d="M350,200 L275,50 L200,200 L100,200 L25,50 Z"
          fill="purple"
          onClick={() => handleClick(4, 'purple')}
        />
      </svg>

      {selectedShape && (
        <p>Selected shape color: {selectedShape}</p>
      )}
    </div>
  );
};

export default RegionClickDetection;
