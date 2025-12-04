import React from 'react';
import { Link } from 'react-router-dom';
import './LeftSideBar.css';

const LeftSideBar: React.FC = () => {
  return (
    <div className="left-side-bar">
      <Link to="/tasks"><button>✅ Tasks</button></Link>
      <Link to="/labs"><button>🔬 Lab</button></Link>
      <Link to="/labs"><button>💸 25K Challenge</button></Link>
    </div>
  );
};

export default LeftSideBar;
