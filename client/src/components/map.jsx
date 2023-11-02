import React, { useEffect } from 'react';
import mapboxgl from 'mapbox-gl';

const MapView = () => {
  useEffect(() => {
    // Initialize Mapbox map here
    mapboxgl.accessToken = 'pk.eyJ1IjoibWotYXpuIiwiYSI6ImNsb2htZXJtdDBkanEya3BxcHdjYzZlbmUifQ.WJWaT0Yibp3h9zNzvxi9oQ';
    const map = new mapboxgl.Map({
      container: 'map-container', // HTML element to hold the map
      style: 'mapbox://styles/mapbox/streets-v11', // Example map style
      center: [-74.5, 40], // Initial center coordinates (longitude, latitude)
      zoom: 5, // Initial zoom level
    });

    // Cleanup the map on component unmount
    return () => map.remove();
  }, []);

  return <div id="map-container" style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0 }} />;

};

export default MapView;
