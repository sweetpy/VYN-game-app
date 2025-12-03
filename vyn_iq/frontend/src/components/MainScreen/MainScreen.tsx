import React from 'react';
import './MainScreen.css';

const MainScreen: React.FC = () => {
  return (
    <div className="main-screen">
      <h1>Welcome to VYN IQ</h1>
      <div className="buildings">
        <div className="building">Safari Surf</div>
        <div className="building">BodaVolt</div>
        <div className="building">Nest</div>
        <div className="building">Tanzanite Tea</div>
      </div>
      <div className="journal">
        <button>📖 Journal</button>
      </div>
    </div>
  );
};

export default MainScreen;
