const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  // title: { type: String, required: true },
  // url: { type: String, required: true },
  // saved: { type: Boolean, default: false },
  // summary: {type: String, required: false},
  // date: { type: Date, required: true }
});

const bestSellerSchema = new Schema({
  // title: { type: String, required: true },
  // url: { type: String, required: true },
  // saved: { type: Boolean, default: false },
  // summary: {type: String, required: false},
  // date: { type: Date, required: true }
});


const Review = module.exports = mongoose.model("Review", reviewSchema);
const bestSeller = module.exports = mongoose.model("bestSeller", bestSellerSchema);

