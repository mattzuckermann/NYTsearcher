const router = require("express").Router();
const articleRoutes = require("./articles");
const recommendationRoutes = require("./recommendations");
// Article routes
router.use("/articles", articleRoutes);
router.use("/recommendations", recommendationRoutes);
module.exports = router;
