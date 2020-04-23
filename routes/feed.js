const express = require('express');
const router = express.Router();
const feedCtrl = require('../controllers/feed.js');


router.get('/', feedCtrl.getFeed);

module.exports = router;
