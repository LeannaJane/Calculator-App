import '../css/App.css';
import Calculator from './Calculator-Component';
import DisableZoom from './Zoom';
import React, { useState } from 'react';

function App() {
  const [isAnimating, setIsAnimating] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState('rgb(134, 187, 134)');
  const [showColorPopup, setShowColorPopup] = useState(false);

  const colors = ['#FF5733', '#33FF57', '#3357FF', '#FFFF33', '#FF33FF', '#33FFFF'];

  const handleAnimationClick = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setIsAnimating(false);
    }, 4000); 
  };

  const handleColorChangeClick = () => {
    setShowColorPopup(true);
  };

  const selectColor = (color) => {
    setBackgroundColor(color);
    setShowColorPopup(false); 
  };


  return (
    <div className="App" style={{ backgroundColor }}>
      <DisableZoom />
      <h1>React Calculator App</h1>
      <div className={`calculator ${isAnimating ? 'animate-calculator' : ''}`}>
        <Calculator />
      </div>

      <button className="floating-button" onClick={handleAnimationClick}>
        ✨
      </button>

      <button className="Color-change-button" onClick={handleColorChangeClick}>
        Color
      </button>

      {showColorPopup && (
        <div
          style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: '#fff',
            padding: '20px',
            borderRadius: '10px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            zIndex: 200,
          }}
        >
          <h2>Select a Background Color</h2>
          <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
            {colors.map((color) => (
              <div
                key={color}
                onClick={() => selectColor(color)}
                style={{
                  width: '40px',
                  height: '40px',
                  backgroundColor: color,
                  border: '1px solid #000',
                  cursor: 'pointer',
                }}
              ></div>
            ))}
          </div>
          <button
            onClick={() => setShowColorPopup(false)}
            style={{
              marginTop: '20px',
              padding: '10px 20px',
              backgroundColor: '#333',
              color: '#fff',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
}

export default App;