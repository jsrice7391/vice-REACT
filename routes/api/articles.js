const router = require("express").Router();
const articlesController = require("../../controller/articlesController");

// Matches with "/api/books"
router.route("/")
.get(articlesController.getAll);



module.exports = router;
