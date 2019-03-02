const router = require("express").Router();
const booksRoutes = require("./books");

// Book routes
router.use("/books", booksRoutes);

module.exports = router;
