const router = require('express').Router();
const aC = require('../../controllers/authenticationController');

// Matches with "/api/authentication"
router.route('/register').post(aC.registerUser);
router.route('/login').post(aC.loginUser);
router.route('/loggedIn').post(aC.loggedIn);

module.exports = router;
