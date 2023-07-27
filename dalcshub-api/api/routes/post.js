// Author: Khaled Al-Mahbashi & Kent Chew
const express = require("express");
const Post = require("../models/post");
const User =  require("../models/user");
const router = express.Router();

// khaled: get post by ID
router.get("/:id", (req, res) => {
  const id = req.params.id;

  try {
    Post.findById(id).then((response) => {
      if (response == null) {
        res.status(404).send("This post does not exist");
      } else {
        res.status(200).send({
            id: response._id,
            postTitle: response.postTitle,
            postDescription: result.postDescription,
            postDate: result.timeCreated,
            postAuthor: result.postAuthor,
            postRating: result.postRating
        });
      }
    });
  } catch (err) {
    return res.status(500).json({ message: "Internal server error" });
  }
});

// Kent: get all posts
router.get("/", async (req, res) => {
  try {
    // Find all posts and sort based on the timeCreated field
    const posts = await Post.find().sort({ timeCreated: -1 });
    res.status(200).json({
      success: true,
      data: posts,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to fetch posts" });
  }
});

// Kent: get all posts with specific course id
router.get("/course/:id", async (req, res) => {
  const id = req.params.id;

  try {
    Post.find({ courseId: id })
      .sort({ timeCreated: -1 })
      .then((posts) => res.status(200).json({ success: true, data: posts }))
      .catch((err) => res.status(500).json({ success: false, error: "Error fetching posts" }));
  } catch (error) {
    return res.status(500).json({ success: false, message: "Failed to fetch posts" });
  }
});

// Kent: add post
router.post("/add", async (req, res) => {
  try {
    const { title, message, author, date, courseId } = req.body; // Update the property names here
    if (!title || !message || !author || !date || !courseId) {
      return res.status(400).json({ success: false, message: "Incorrect request" });
    }
    console.log("title: ", title);
    console.log("message: ", message);
    console.log("author: ", author);
    console.log("date: ", date);
    const newPost = await Post.create({
      postTitle: title,
      postDescription: message,
      postAuthor: author,
      timeCreated: date,
      courseId: courseId,
    });
    res.status(200).json({ success: true, data: newPost });
  } catch (error) {
    console.error("Error creating post:", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

// Meet Kumar Patel : Add user to the likedBy Array
router.post("/updateLikedBy", async (req, res) => {
  const { userId, postId } = req.body;

  try {

    if (!userId || !postId) {
      return res
        .status(400)
        .json({ success: false, message: "Incorrect Request!" });
    }

    const user = await User.findById(userId);
    console.log(user)

    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    const post = await Post.findById(postId);
    console.log(post)
    if (!post) {
      return res
        .status(404)
        .json({ success: false, message: "Post not found" });
    }

    if (post.likedBy.includes(userId)) {

      return res.status(409).json({ message: "User has already liked the post" });

    }


    post.likedBy.push(userId);

    await post.save();

    res.json({ success: true, message: "LikedBy array updated successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error!" + error  });
  }
});

// Meet Kumar Patel and Kent Chew : update Post Rating
router.put("/updatePostRating", async (req, res) => {
  const { postId , rating} = req.body;

  try {

    if (!postId) {
      return res
        .status(400)
        .json({ success: false, message: "Incorrect Request!" });
    }

    const post = await Post.findById(postId);
    console.log(post)
    if (!post) {
      return res
        .status(404)
        .json({ success: false, message: "Post not found" });
    }
    console.log("post.likedBy")
  
    post.postRating = (rating);

    await post.save();

    res.json({ success: true, message: "LikedBy array updated successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error!" + error  });
  }
});

// Meet Kumar Patel : Remove user from likedBy Array
router.post("/removeLikedBy", async (req, res) => {
  const { userId, postId } = req.body;

  try {

    if (!userId || !postId) {
      return res
        .status(400)
        .json({ success: false, message: "Incorrect Request!" });
    }

    const user = await User.findById(userId);
    console.log(user)

    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    const post = await Post.findById(postId);
    console.log(post)
    if (!post) {
      return res
        .status(404)
        .json({ success: false, message: "Post not found" });
    }

    if (post.likedBy.includes(userId)) {

      post.likedBy.pull(userId);
      await post.save();
      return res.json({ success: true, message: "User disliked the post" });

    }

  } catch (error) {
    res.status(500).json({ message: "Internal server error!" });
  }
});

module.exports = router;
