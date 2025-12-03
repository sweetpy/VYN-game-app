import React from 'react';
import './RightSideBar.css';

interface RightSideBarProps {
  toggleAIBrain: () => void;
  toggleIdeaForge: () => void;
  toggleExecutionPipeline: () => void;
}

const RightSideBar: React.FC<RightSideBarProps> = ({ toggleAIBrain, toggleIdeaForge, toggleExecutionPipeline }) => {
  return (
    <div className="right-side-bar">
      <button onClick={toggleAIBrain}>🧠 AI Brain</button>
      <button onClick={toggleIdeaForge}>💡 Ideas</button>
      <button onClick={toggleExecutionPipeline}>⚙ Pipeline</button>
      <button>👥 Staff</button>
      <button>🔔 Notifications</button>
    </div>
  );
};

export default RightSideBar;
