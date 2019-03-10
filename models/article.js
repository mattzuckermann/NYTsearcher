const Schema = mongoose.Schema;
const mongoose = require('mongoose');

const articleSchema = new Schema({
  title: { type: String, required: true },
  url: { type: String, required: true },
  saved: { type: Boolean, default: false },
  summary: { type: String, required: false },
  date: { type: Date, required: true },
});

const Article = mongoose.model('Article', articleSchema);

export default Article;
