const mongoose = require('mongoose');

const ArticleSchema = new mongoose.Schema({
  isbn: String,
  title: String,
  author: String,
  summary: String,
  published_date: { type: Date },
  publisher: String,
  // // `comment` is an object that stores a Comment id
  // // The ref property links the ObjectId to the Note model
  // // This allows us to populate the Article with an associated Comment
  // note: [
  //   {
  //     type: Schema.Types.ObjectId,
  //     ref: `Comment`,
  //   },
  // ],
});

module.exports = mongoose.model('Article', ArticleSchema);
