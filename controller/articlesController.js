const db = require("../models");


module.exports = {
    getAll: (req, res) =>{
        db.Article.find({}).then((articles) => res.send("Found All the Articles"))
    }
}