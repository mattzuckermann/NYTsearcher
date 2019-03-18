const router = require('express').Router();
const articlesController = require('../../controllers/articlesController');

router.route('/findAll').post(articlesController.findAllU);
router.route('/create').post(articlesController.createU);
router.route('/delete').post(articlesController.removeU);
router.route('/find/:id').post(articlesController.findByIdU);
router.route('/update').put(articlesController.updateU);

module.exports = router;
