const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  id: { type: String, required: true }
});

const Article = module.exports = mongoose.model("User", articleSchema);
