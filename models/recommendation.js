const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const recSchema = new Schema({
  sender: { type: String, required: false },
  receiver: { type: String, required: false },
  message: { type: String, required: false },
  title: { type: String, required: false },
  url: { type: String, required: false },
});

module.exports = mongoose.model('Recommendation', recSchema);
