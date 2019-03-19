const router = require('express').Router();
const aC = require('../../controllers/authenticationController');

// Matches with "/api/authentication"
router.route('/register').post(aC.registerUser);
router.route('/login').post(aC.loginUser);

module.exports = router;
