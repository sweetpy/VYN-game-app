import React from 'react';
import './RightSideBar.css';

interface RightSideBarProps {
  toggleAIBrain: () => void;
}

const RightSideBar: React.FC<RightSideBarProps> = ({ toggleAIBrain }) => {
  return (
    <div className="right-side-bar">
      <button onClick={toggleAIBrain}>🧠 AI Brain</button>
      <button>💡 Ideas</button>
      <button>⚙ Pipeline</button>
      <button>👥 Staff</button>
      <button>🔔 Notifications</button>
    </div>
  );
};

export default RightSideBar;
