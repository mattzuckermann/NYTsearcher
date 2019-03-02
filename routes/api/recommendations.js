const router = require("express").Router();
const articlesController = require("../../controllers/messagingController");

// Matches with "/api/messaging"
router.route("/")
  .post(articlesController.creatRecommendation)

// Matches with "/api/messaging/:id"
router.route("/:id")
    .post(articlesController.createUser)

module.exports = router;
