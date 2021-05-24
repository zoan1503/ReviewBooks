var express = require('express');
var router = express.Router();
var searchController = require('./../controllers/searchController');


router.get('/searchbook', searchController.searchbook);
router.get('/getinfobook', searchController.get_info_book);

module.exports = router;