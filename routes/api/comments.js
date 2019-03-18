const router = require('express').Router();
const commentsController = require('../../controllers/commentsController');

router.route('/save/:id').post(commentsController.saveComment);

module.exports = router;
