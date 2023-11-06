const mongoose = require('mongoose');

const markerSchema = new mongoose.Schema({
  title: String,
  date: Date,
  description: String,
  coordinates: {
    type: [Number], // [longitude, latitude]
    index: '2dsphere' // Enables geospatial indexing for querying based on coordinates
  }
});

module.exports = mongoose.model('Marker', markerSchema);
