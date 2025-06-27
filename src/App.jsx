import React, { useState } from 'react';

const App = () => {
  const [color1, setColor1] = useState('#ff0000');
  const [color2, setColor2] = useState('#0000ff');
  const [direction, setDirection] = useState('to right');

  const gradientStyle = {
    background: `linear-gradient(${direction}, ${color1}, ${color2})`,
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'background 0.3s ease',
  };

  return (
    <div style={gradientStyle}>
      <h1 style={{ color: 'white', marginBottom: '1rem' }}>Gradient Generator</h1>
      <div className="controls">
        <label>
          Color 1: <input type="color" value={color1} onChange={(e) => setColor1(e.target.value)} />
        </label>
        <label>
          Color 2: <input type="color" value={color2} onChange={(e) => setColor2(e.target.value)} />
        </label>
        <label>
          Direction:
          <select value={direction} onChange={(e) => setDirection(e.target.value)}>
            <option value="to right">To Right</option>
            <option value="to left">To Left</option>
            <option value="to top">To Top</option>
            <option value="to bottom">To Bottom</option>
            <option value="to top right">To Top Right</option>
            <option value="to bottom left">To Bottom Left</option>
          </select>
        </label>
      </div>
    </div>
  );
};

export default App;
