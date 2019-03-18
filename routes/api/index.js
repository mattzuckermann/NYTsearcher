const router = require('express').Router();
const articleRoutes = require('./articles');
const recommendationRoutes = require('./recommendations');
const commentRoutes = require('./comments');

// Article routes
router.use('/articles', articleRoutes);
router.use('/recommendations', recommendationRoutes);
router.use('/comments', commentRoutes);
module.exports = router;
