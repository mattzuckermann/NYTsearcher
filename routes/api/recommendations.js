const router = require('express').Router();
const rC = require('../../controllers/recommendationController');

// Matches with "/api/recommendations"
router.route('/').post(rC.createRecommendation);

router.route('/user/:user').get(rC.getUser);

// Matches with "/api/recommendations/:id"
router.route('/:user').get(rC.getRecommendation);

module.exports = router;
