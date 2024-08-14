// src/Modal.js
import React, { useState } from 'react';
import './Modal.css';

function Modal({ onClose, onAddLabel }) {
  const [labelName, setLabelName] = useState('');
  const [selectedColor, setSelectedColor] = useState('#B38BFA');

  const handleAdd = () => {
    if (labelName) {
      onAddLabel(labelName, selectedColor);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Create New group</h2>
        <label>Group Name </label>
        <input 
          type="text" 
          value={labelName} 
          onChange={(e) => setLabelName(e.target.value)} 
          placeholder="Enter label name"
        />
        <div className="color-picker">
        <label>Choose Colour</label>
          {['#B38BFA', '#FF79F2', '#43E6FC', '#F19576', '#0047FF', '#6691FF'].map(color => (
            <div 
              key={color} 
              className={`color-circle ${selectedColor === color ? 'selected' : ''}`} 
              style={{ backgroundColor: color }} 
              onClick={() => setSelectedColor(color)}
            />
          ))}
        </div>
        <div className="modal-buttons">
          <button onClick={handleAdd}>Create</button>
          <button onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
