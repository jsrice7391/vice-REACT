const db = require("../models");
const request = require("request");

const cheerio = require("cheerio");

// This is a scrpaing function that goes to VICE's homepage and then takes in the articles link, title, and author
const getArticles = () => {
  // The beginning of the request from VICE
  request("https://www.vice.com/en_us", (err, response, body) => {
    // Loads the body of the page.
    const $ = cheerio.load(body);
    var results = [];
    // VICE is nice because all of their articles hide within a master div. All of their article links have the same class and are children of this parent div.
    $("div.grd-row")
      .children()
      .each((i, element) => {
        // This will take the links from the articles
        const link = $(element).attr("href");
        // This will be the headline for the Article
        const headline = $(element)
          .children()
          .next()
          .next()
          .children()
          .children("h2")
          .text();
        // This will be the sub text for the article.
        const subText = $(element)
          .children()
          .next()
          .next()
          .children()
          .children("div .grid__wrapper__card__text__summary")
          .text();
        // This is the author
        const author = $(element)
          .children()
          .next()
          .next()
          .children()
          .next()
          .children()
          .text();
        // const photoLink = $(element).children().next().children().next().children().children().attr("class");

        // This checks to make sure that we have all of those parameters. If we do, we create an article within our Mongo DB
        if (link && headline && subText && author) {
          db.Article.create({
            title: headline,
            author: author,
            link: link,
            subText: subText
          })
            .then(function(result) {
              res.json(result)
            })
            .catch(function() {
              console.log("Something went wrong");
            });
        }
      });
  });
};


module.exports = {
    // Get all of the articles
    getAll: (req, res) =>{
        console.log("IN THE ARTICLES SCRAPER")
        db.Article.find({}).then((articles) => res.json(articles)).catch(err => res.status(422).json(err));
    },
    // Use the scraper
    scrapeForArticles: (req, res) =>{
        getArticles();
        res.send("Articles Scraped")
    },
    // Get one of the articles by the parameter of the title that is passed in from the URL
    getOneArticle: (req, res) => {
      db.Article.find({title: req.params.title}).then(articles => res.json(articles)).catch(err =>res.status(422).json(err))
    }
}