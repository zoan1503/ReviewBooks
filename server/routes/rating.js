var express = require('express');
var router = express.Router();
var ratingController = require('./../controllers/ratingController');

router.post('/add', ratingController.add);
router.get('/getrating', ratingController.get_rating);
router.put('/update', ratingController.update);
router.get('/getaverageratingbook', ratingController.get_average_and_count_rating_book);

module.exports = router;