const express = require('express');
const router = express.Router();
const path = require('path');
const rooytDir = require('../util/path');


router.post('/success', (req, res, next) => {
    res.sendFile(path.join(rooytDir, 'views', 'success.html'));
  });

module.exports = router; 