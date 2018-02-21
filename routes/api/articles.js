const express = require("express");
const router = express.Router();
const db = require("../../models");
const articleController = require("../../controller/articlesController")

router.route("/")
    .get(articleController.getAll)

router.route("/scrape")
    .get(articleController.scrapeForArticles)




module.exports = router;
