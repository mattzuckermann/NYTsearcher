const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const articleSchema = new Schema({
  title: { type: String, required: true },
  url: { type: String, required: true },
  summary: { type: String, required: false },
  date: { type: Date, required: true },
  comments: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Comments',
    },
  ],
});

module.exports = mongoose.model('Article', articleSchema);
