import React from 'react';
import { Link } from 'react-router-dom';
import './RightSideBar.css';

const RightSideBar: React.FC = () => {
  return (
    <div className="right-side-bar">
      <Link to="/ai-brain"><button>🧠 AI Brain</button></Link>
      <Link to="/ideas"><button>💡 Ideas</button></Link>
      <Link to="/pipeline"><button>⚙ Pipeline</button></Link>
      <Link to="/staff"><button>👥 Staff</button></Link>
      <Link to="/notifications"><button>🔔 Notifications</button></Link>
    </div>
  );
};

export default RightSideBar;
