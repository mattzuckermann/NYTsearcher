const router = require("express").Router();
const articlesController = require("../../controllers/articlesController");

// Matches with "/api/articles"
/*router.route("/")
  .get(articlesController.findAll)
  .post(articlesController.create);

// Matches with "/api/articles/:id"
router
  .route("/:id")
  .get(articlesController.findById)
  .put(articlesController.update)
  .delete(articlesController.remove);*/

router.route("/findAll").post(articlesController.findAllU);
router.route("/create").post(articlesController.createU);
router.route("/delete").post(articlesController.removeU);
router.route("/find").post(articlesController.findByIdU)
router.route("/update").put(articlesController.updateU)
  



module.exports = router;
