const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new Schema(
  {
    title: {
      type: String,
      required: true
    },
    author: {
      type: String,
      required: true
    },
    link: {
      type: String,
      required: true
    }
  },
  { timestamps: { createdAt: "created_at" }}
);


const Article = mongoose.model("Article", articleSchema);

module.exports = Article; 
