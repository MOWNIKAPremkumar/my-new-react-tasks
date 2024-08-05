import React, { useState } from 'react';

const ColorChangingBox = () => {
  
  const [color, setColor] = useState('#ffffff'); // Initial color is white

  
  const generateRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  
  const handleClick = () => {
    setColor(generateRandomColor());
  };

  
  const boxStyle = {
    backgroundColor: color,
    width: '500px',
    height: '500px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    border: '1px solid #000',
    margin: '20px auto'
  };

  return (
    <div style={boxStyle} onClick={handleClick}>
      Click me
    </div>
  );
};

export default ColorChangingBox;
