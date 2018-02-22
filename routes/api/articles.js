const express = require("express");
const router = express.Router();
const db = require("../../models");
const articleController = require("../../controller/articlesController")

// These are the routes to the controller which is specific to the articles we want back. This will allow us us cleaner code and the ability to have multiple developers working on different functionalities with less conflict.

// This is hidden within a secondary foler in my routes, so by the time we get to this portion of the routes, the router has already gone through "/api/articles"

// Any Route that just comes from "/api/articles"
router.route("/")
    .get(articleController.getAll)

// Routes that come through "/api/articles/scrape"
router.route("/scrape")
    .get(articleController.scrapeForArticles)

// Articles that comes through "/api/articles/:title"
router.route("/:title")
    .get(articleController.getOneArticle)




module.exports = router;
