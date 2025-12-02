import React from 'react';
import './Popup.css';

const Popup = ({ isOpen, onClose, children, contentClass = '' }) => {
  if (!isOpen) return null;
  return (
    <div className="popup-overlay">
      <div className={`popup-content ${contentClass}`}>
        <button className="close-button" onClick={onClose}>X</button>
        <div className="content">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Popup;
