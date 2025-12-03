import React from 'react';
import './RightSideBar.css';

interface RightSideBarProps {
  toggleAIBrain: () => void;
  toggleIdeaForge: () => void;
  toggleExecutionPipeline: () => void;
  toggleStaffManagement: () => void;
}

const RightSideBar: React.FC<RightSideBarProps> = ({ toggleAIBrain, toggleIdeaForge, toggleExecutionPipeline, toggleStaffManagement }) => {
  return (
    <div className="right-side-bar">
      <button onClick={toggleAIBrain}>🧠 AI Brain</button>
      <button onClick={toggleIdeaForge}>💡 Ideas</button>
      <button onClick={toggleExecutionPipeline}>⚙ Pipeline</button>
      <button onClick={toggleStaffManagement}>👥 Staff</button>
      <button>🔔 Notifications</button>
    </div>
  );
};

export default RightSideBar;
