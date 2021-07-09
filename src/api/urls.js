const express = require('express');
const router = express.Router()
const {createShortURL, getURL, getAllURLs} = require('../controllers/urls')

// @route  GET /api/urls
// @description fetch all urls
router.get('/', getAllURLs);

// @route  POST /api/urls/shorten
// @description create short url
router.post('/shorten', createShortURL);

// @route  POST /api/urls/shortUrl
// @description get url object for short url
router.get('/:urlCode', getURL);


module.exports = router;