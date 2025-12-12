import React from 'react';
import { Link } from 'react-router-dom';
import './BottomRightMenu.css';

const BottomRightMenu: React.FC = () => {
  return (
    <div className="bottom-right-menu">
      <Link to="/"><button>🏢 Businesses</button></Link>
      <Link to="/finance"><button>📘 Finance</button></Link>
    </div>
  );
};

export default BottomRightMenu;
