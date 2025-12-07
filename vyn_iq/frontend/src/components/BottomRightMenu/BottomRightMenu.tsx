import React from 'react';
import './BottomRightMenu.css';

interface BottomRightMenuProps {
  toggleFinanceBrain: () => void;
}

const BottomRightMenu: React.FC<BottomRightMenuProps> = ({ toggleFinanceBrain }) => {
  return (
    <div className="bottom-right-menu">
      <button>🏢 Businesses</button>
      <button onClick={toggleFinanceBrain}>📘 Finance</button>
    </div>
  );
};

export default BottomRightMenu;
