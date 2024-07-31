import React from 'react';
import './Popup.css'

const Popup = ({ isOpen, onClose, message }) => {
  if (!isOpen) return null;
  return (
    <div className="popup-overlay">
      <div className="popup-container">
        <div className="popup-content">
          <h2>{message}</h2>
        </div>
      </div>
    </div>
  );
};

export default Popup;