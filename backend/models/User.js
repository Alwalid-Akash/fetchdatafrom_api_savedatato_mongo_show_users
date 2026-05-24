const mongoose = require("mongoose");

const userDataSchema = new mongoose.Schema({
  userId: Number,
  name: String,
  email: String,
  posts: Array,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("UserData", userDataSchema);