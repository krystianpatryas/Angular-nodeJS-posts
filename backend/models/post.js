const mongoose = require('mongoose');
const {model} = require("mongoose");

const postSchema = mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true }
});

module.exports = model('Post', postSchema);
