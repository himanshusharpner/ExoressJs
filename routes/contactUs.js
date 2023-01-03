const express = require('express');
const router = express.Router();
const path = require('path');
const rooytDir = require('../util/path');

router.get('/contactus', (req, res, next) => {
    res.sendFile(path.join(rooytDir, 'views', 'contactUs.html'));
  });

module.exports = router;