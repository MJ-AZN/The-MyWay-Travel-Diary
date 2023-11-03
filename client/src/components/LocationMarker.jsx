import React from 'react';

const LocationMarker = ({ coordinates }) => {
    const { lng, lat } = coordinates;

    const markerStyle = {
      position: 'absolute',
      width: '20px',
      height: '20px',
      borderRadius: '50%',
      background: 'red',
      left: '50%',  // Center horizontally
      top: '50%',   // Center vertically
      transform: 'translate(-50%, -50%)',
    };

    return (
      <div className="location-marker" style={markerStyle}></div>
    );
};

export default LocationMarker;

