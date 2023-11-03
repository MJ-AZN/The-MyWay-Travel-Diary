// client/src/components/MapView.jsx
import React, { useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import SideMenu from './SideMenu';

const MapView = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [coordinates, setCoordinates] = useState(null);

  useEffect(() => {
    // Initialize Mapbox map here
    mapboxgl.accessToken = import.meta.env.VITE_MAPTOKEN;
    const map = new mapboxgl.Map({
      container: 'map-container', // HTML element to hold the map
      style: 'mapbox://styles/mapbox/streets-v11', // Example map style
      center: [-74.5, 40], // Initial center coordinates (longitude, latitude)
      zoom: 5, // Initial zoom level
    });

    map.on('dblclick', (e) => {
      const { lng, lat } = e.lngLat;
      setCoordinates({ lng, lat });
      setMenuOpen(true);
    });

    map.on('click', (e) => {
      if (menuOpen) {
        setMenuOpen(false);
      }
    });

    // Cleanup the map on component unmount
    return () => map.remove();
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <div id="map-container" style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0 }} />
      <SideMenu isOpen={menuOpen} onClose={closeMenu} />
    </>
  );
};

export default MapView;
