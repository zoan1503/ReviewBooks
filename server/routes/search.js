var express = require('express');
var router = express.Router();
var searchController = require('./../controllers/searchController');


router.get('/searchbook', searchController.searchbook);

module.exports = router;