// Authors: Kent Chew
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
  postTitle: { type: String, required: true },
  postDescription: { type: String, required: true },
  postAuthor: { type: String, required: true },
  postRating: { type: Number, required: true },
  likedBy: { type: Array, required: true },
  timeCreated: { type: Date, default: Date.now },
  courseCode: { type: String, required: true },
});

const Post = mongoose.model("posts", postSchema);

module.exports = Post;
