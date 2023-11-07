import React from 'react';

const SideMenu = ({ isOpen, onClose, handleSaveTrip }) => {
  return (
    <div className={`side-menu ${isOpen ? 'open' : ''}`}>
      <button onClick={onClose} className="close-button">
        X
      </button>
      <div className="input-group">
        <label htmlFor="title">Title</label>
        <input type="text" id="title" style={{ background: '#f9f9f9', color: '#000', marginRight: '50px' }} />
      </div>
      <div className="input-group">
        <label htmlFor="date">Date</label>
        <input type="date" id="date" style={{ background: '#f9f9f9', color: '#000', marginRight: '50px' }} />
      </div>
      <div className="input-group">
        <label htmlFor="description">Description</label>
        <textarea id="description" style={{ background: '#f9f9f9', color: '#000', marginRight: '50px' }}></textarea>
      </div>
      <button onClick={handleSaveTrip}>Save Trip</button>
    </div>
  );
};


export default SideMenu;