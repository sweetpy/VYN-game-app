import React from 'react';
import './LeftSideBar.css';

interface LeftSideBarProps {
  toggleTaskManager: () => void;
}

const LeftSideBar: React.FC<LeftSideBarProps> = ({ toggleTaskManager }) => {
  return (
    <div className="left-side-bar">
      <button onClick={toggleTaskManager}>✅ Tasks</button>
      <button>🔬 Lab</button>
      <button>💸 25K Challenge</button>
    </div>
  );
};

export default LeftSideBar;
