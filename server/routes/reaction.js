var express = require('express');
var router = express.Router();
var reactionController = require('./../controllers/reactionController');

router.get('/getalllike', reactionController.get_all_like);
router.get('/getalldislike', reactionController.get_all_dislike);
router.post('/add', reactionController.add);
router.get('/getlastreaction', reactionController.get_last_reaction);
router.put('/update', reactionController.update);
router.delete('/delete', reactionController.delete);

module.exports = router;