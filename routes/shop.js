const path = require('path');

const express = require('express');

const rooytDir = require('../util/path');

const router = express.Router();


router.get('/', (req, res, next) => {
  res.sendFile(path.join(rooytDir, 'views', 'shop.html'));
});

module.exports = router;
