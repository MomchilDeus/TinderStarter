const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const StarterSchema = new Schema({
  starter: {
    type: String,
    required: true
  },
  likes: {
    type: Number,
    default: 0
  },
  date: {
    type: Date,
    default: Date.now
  }
});

mongoose.model("starters", StarterSchema);
