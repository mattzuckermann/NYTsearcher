const path = require('path');
const router = require('express').Router();
const axios = require('axios');
const apiRoutes = require('./api');

// API Routes
router.use('/api', apiRoutes);

router.use('/api/query/', function(req, res) {
  axios.get(req.body.url).then(function(data) {
    res.json(data.data);
  });
});

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

module.exports = router;
