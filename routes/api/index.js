const router = require("express").Router();
const articleRoutes = require("./articles");

// This is for all of the articles.
router.use("/articles", articleRoutes);

module.exports = router;

