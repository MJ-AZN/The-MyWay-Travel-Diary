import React, { useState } from 'react';
import mapboxgl from 'mapbox-gl';

const LocationMarker = ({ map }) => {
    const [formData, setFormData] = useState({
        title: '',
        date: '',
        description: '',
    });

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSaveTrip = async (e) => {
        e.preventDefault();

        const coordinates = map.getCenter();
        const title = formData.title;
        const date = formData.date;
        const description = formData.description;

        try {
            const response = await fetch('/api/markers', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    title,
                    date,
                    description,
                    coordinates: [coordinates.lng, coordinates.lat],
                }),
            });

            if (response.ok) {
                alert('Trip saved successfully!');
            } else {
                alert('Failed to save trip');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    // Create a new marker and make it draggable
    const marker = new mapboxgl.Marker({ draggable: true })
        .setLngLat(map.getCenter())
        .addTo(map);

    marker.on('dragend', () => {
        const coordinates = marker.getLngLat();
        map.flyTo({ center: coordinates });
    });

    return (
        <div className="location-marker">
            <form onSubmit={handleSaveTrip}>
                <input
                    type="text"
                    name="title"
                    placeholder="Title"
                    value={formData.title}
                    onChange={handleInputChange}
                    required
                />
                <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    required
                />
                <textarea
                    name="description"
                    placeholder="Description"
                    value={formData.description}
                    onChange={handleInputChange}
                    required
                />
                <button type="submit">Save Trip</button>
            </form>
        </div>
    );
};

export default LocationMarker;
