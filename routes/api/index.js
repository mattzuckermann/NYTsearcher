<<<<<<< HEAD
const router = require('express').Router();
const articleRoutes = require('./articles');

// Article routes
router.use('/articles', articleRoutes);

=======
const router = require("express").Router();
const articleRoutes = require("./articles");
const recommendationRoutes = require("./recommendations");
// Article routes
router.use("/articles", articleRoutes);
router.use("/recommendations", recommendationRoutes);
>>>>>>> master
module.exports = router;
