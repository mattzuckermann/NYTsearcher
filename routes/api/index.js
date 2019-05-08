const router = require('express').Router();
const articleRoutes = require('./articles');
const recommendationRoutes = require('./recommendations');
const commentRoutes = require('./comments');
const authenticationRoutes = require('./authentication');

// Matches with "/api"
router.use('/articles', articleRoutes);
router.use('/recommendations', recommendationRoutes);
router.use('/comments', commentRoutes);
router.use('/authentication', authenticationRoutes);
module.exports = router;
