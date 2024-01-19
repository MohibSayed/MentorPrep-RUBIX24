import React, { useState } from 'react';
import './Popup.css'; // Import your CSS file for styling

const Popup = ({ text, onClose }) => {
  return (
    <div className="popup-overlay">
      <div className="popup-container">
        <button className="close-button" onClick={onClose}>
          X
        </button>
        <p className="popup-text">{text}</p>
      </div>
    </div>
  );
};

export default Popup;