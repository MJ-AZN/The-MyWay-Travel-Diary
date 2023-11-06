const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const markerRoutes = require('.routes/marker-routes');

const PORT = process.env.PORT || 3001;
const app = express();

// Connect to your MongoDB database
mongoose.connect('mongodb://localhost:27017/travel-log', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Middleware to handle JSON data
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Serve the static files in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, './client/dist')));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './client/dist/index.html'));
  });
}

// Use marker routes
app.use('/api', markerRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`API server running on port ${PORT}!`);
});
