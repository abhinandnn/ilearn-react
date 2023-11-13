import React, { useState } from 'react';
import './utils.css';

const DropUpMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen(!isOpen);

  const menuItems = ['2x', '1.75x', '1.5x', '1.25x', '1x', '0.75x', '0.5x', '0.25x'];

  return (
    <div className="drop-up-menu">
      <button onClick={toggleOpen}>Menu</button>
      {isOpen && (
        <div className="menu-items">
          {menuItems.map((item, index) => (
            <div key={index} className="menu-item" onClick={toggleOpen}>
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropUpMenu;
