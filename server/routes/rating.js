var express = require('express');
var router = express.Router();
var ratingController = require('./../controllers/ratingController');

router.post('/add', ratingController.add);
router.get('/getrating', ratingController.get_rating);
router.put('/update', ratingController.update);
router.delete('/getaverage1book', ratingController.get_average_1book);

module.exports = router;