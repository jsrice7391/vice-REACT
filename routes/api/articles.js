const router = require("express").Router();
const articlesController = require("../../controller/articlesController");

// Matches with "/api/books"
router.route("/scrape/all")
    .get(articlesController.getAll);

router.route("/articles/scrape")
    .get(articlesController.scrapeForArticles);




module.exports = router;
