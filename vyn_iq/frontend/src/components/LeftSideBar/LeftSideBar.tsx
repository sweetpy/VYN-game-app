import React from 'react';
import './LeftSideBar.css';

interface LeftSideBarProps {
  toggleTaskManager: () => void;
  toggleDailyLabs: () => void;
}

const LeftSideBar: React.FC<LeftSideBarProps> = ({ toggleTaskManager, toggleDailyLabs }) => {
  return (
    <div className="left-side-bar">
      <button onClick={toggleTaskManager}>✅ Tasks</button>
      <button onClick={toggleDailyLabs}>🔬 Lab</button>
      <button onClick={toggleDailyLabs}>💸 25K Challenge</button>
    </div>
  );
};

export default LeftSideBar;
