const router = require("express").Router();
const rC = require("../../controllers/recommendationController");


// Matches with "/api/recommendations"
router.route("/").post( rC.createRecommendation);

router.route("/user/:username").get(rC.getUser);

// Matches with "/api/recommendations/:id"
router.route("/:username").get(rC.getRecommendation);

module.exports = router;
