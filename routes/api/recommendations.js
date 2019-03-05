const router = require("express").Router();
const rC = require("../../controllers/recommendationController");

// Matches with "/api/recommendations"
router.route("/")
  .post(rC.creatRecommendation)
  .get(rC.creatRecommendation)
// Matches with "/api/recommendations/:id"
router.route("/:id")
    .post(rC.createUser)
    .get(rC.getUser)

module.exports = router;
