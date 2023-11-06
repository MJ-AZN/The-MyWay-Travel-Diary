const express = require('express');
const router = express.Router();
const Marker = require('../models/Marker');

// Create a new marker
router.post('/markers', async (req, res) => {
  try {
    const { title, date, description, coordinates } = req.body;

    if (!title || !date || !description || !coordinates) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const newMarker = new Marker({
      title,
      date,
      description,
      coordinates,
    });

    await newMarker.save();

    res.status(201).json({ message: 'Marker created successfully', marker: newMarker });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

// Get all markers
router.get('/markers', async (req, res) => {
  try {
    const markers = await Marker.find();

    res.status(200).json(markers);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

// Get a specific marker by ID
router.get('/markers/:id', async (req, res) => {
  try {
    const marker = await Marker.findById(req.params.id);

    if (!marker) {
      return res.status(404).json({ message: 'Marker not found' });
    }

    res.status(200).json(marker);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

// Update a specific marker by ID
router.put('/markers/:id', async (req, res) => {
  try {
    const { title, date, description, coordinates } = req.body;

    if (!title || !date || !description || !coordinates) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const updatedMarker = {
      title,
      date,
      description,
      coordinates,
    };

    const marker = await Marker.findByIdAndUpdate(req.params.id, updatedMarker, { new: true });

    if (!marker) {
      return res.status(404).json({ message: 'Marker not found' });
    }

    res.status(200).json({ message: 'Marker updated successfully', marker });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

// Delete a specific marker by ID
router.delete('/markers/:id', async (req, res) => {
  try {
    const marker = await Marker.findByIdAndDelete(req.params.id);

    if (!marker) {
      return res.status(404).json({ message: 'Marker not found' });
    }

    res.status(200).json({ message: 'Marker deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router;
