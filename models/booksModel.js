const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let book = new Schema({
  book_name: {
    type: String,
  },
  author: {
    type: String,
  },
  publish_year: {
    type: String,
  },
  category: {
    type: String,
  },
});

module.exports = mongoose.model("mybooks", book);
