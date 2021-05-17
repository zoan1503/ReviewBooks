var express = require('express');
var router = express.Router();
var reviewController = require('./../controllers/reviewController');

router.get('/getall', reviewController.getall)
router.post('/add', reviewController.add);
router.get('/getlast', reviewController.getlast);
router.put('/update', reviewController.update);
router.delete('/delete', reviewController.delete);

module.exports = router;