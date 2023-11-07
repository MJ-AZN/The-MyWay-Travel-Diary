const express = require('express');
const path = require('path');
const db = require('./config/connection')
const markerRoutes = require('./routes/marker-routes');

const PORT = process.env.PORT || 8080;
const app = express();

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
db.once('open',() =>{
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});


