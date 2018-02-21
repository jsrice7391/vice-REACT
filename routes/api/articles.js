const express = require("express");
const router = express.Router();
const db = require("../../models");



// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log("Time: ", Date.now());
  next();
});
// define the home page route
router.get("/", (req, res) => {
 db.Article.find({})
   .then(articles => res.json(articles))
   .catch(err => res.status(422).json(err));

});
// define the about route
router.get("/about", function(req, res) {
  res.send("About birds");
});

module.exports = router;
