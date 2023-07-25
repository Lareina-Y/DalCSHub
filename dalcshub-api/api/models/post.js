// Authors: Kent Chew
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
  postTitle: { type: String, required: true },
  postDescription: { type: String, required: true },
  postAuthor: { type: String, required: true },
  postRating: { type: Number, required: true, default: 0 },
  likedBy: { type: Array, required: true },
  timeCreated: { type: Date, required: true },
  courseId: { type: Number, required: true },
});

<<<<<<< HEAD
const Post = mongoose.model("posts", postSchema);
=======
const Post = mongoose.model("Post", postSchema);
>>>>>>> bdcf47e (created post model)

module.exports = Post;
