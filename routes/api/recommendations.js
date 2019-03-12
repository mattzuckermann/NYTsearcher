const router = require("express").Router();
const rC = require("../../controllers/recommendationController");


// Matches with "/api/recommendations"
router.route("/")
  .post( rC.createRecommendation)
  
// Matches with "/api/recommendations/:id"
router.route("/:id").get(rC.getRecommendation);

module.exports = router;
