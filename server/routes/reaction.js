var express = require('express');
var router = express.Router();
var reactionController = require('./../controllers/reactionController');

router.get('/getalllike', reactionController.get_all_like);
router.get('/getalldislike', reactionController.get_all_dislike);
router.post('/add', reactionController.add);
router.get('/getallreaction1book', reactionController.get_all_reaction_1book);
router.put('/update', reactionController.update);
router.delete('/delete', reactionController.delete);

module.exports = router;