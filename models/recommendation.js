const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const recSchema = new Schema({
    sender:[{type: Schema.Types.ObjectId, ref : 'User',required: true}],
    receiver:[{type: Schema.Types.ObjectId, ref : 'User',required: true}],
  message: {type: String, required: false},

});

const Recommendation = module.exports = mongoose.model("Recommendation", recSchema);
