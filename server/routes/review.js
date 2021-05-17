var express = require('express');
var router = express.Router();
var reviewController = require('./../controllers/reviewController');

router.get('/getallreview1user', reviewController.get_all_review_1user);
router.get('/getallreview1book', reviewController.get_all_review_1book);
router.post('/add', reviewController.add);
router.get('/getlast', reviewController.getlast);
router.put('/update', reviewController.update);
router.delete('/delete', reviewController.delete);

module.exports = router;