const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const uniqueValidator = require("mongoose-unique-validator");


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

articleSchema.plugin(uniqueValidator);

const Article = mongoose.model("Article", articleSchema);

module.exports = Article; 
