const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const recSchema = new Schema({
    sender:[{type: Schema.Types.ObjectId, ref : 'User',required: true}],
    receiver:[{type: Schema.Types.ObjectId, ref : 'User',required: true}],
  title: { type: String, required: true },
  url: { type: String, required: true },
  saved: { type: Boolean, default: false },
  message: {type: String, required: false},
  date: { type: Date, required: true }
});

const Article = module.exports = mongoose.model("Recommendation", articleSchema);
