// Authors: Shiwen(Lareina)

const express = require("express");
const User = require("../models/user");
const Course = require("../models/course");

const router = express.Router();

// Lareina: PUT call to follow course
router.put("/follow", async (req, res) => {
  const body = req.body;
  const { userId, courseId } = body;

  try {
    if (!userId || !courseId) {
      return res
        .status(404)
        .json({ success: false, data: "Incorrect Request!" });
    }

    const user = await User.findById(userId);
    const course = await Course.findById(courseId);

    if (!course || !user) {
      return res
        .status(404)
        .json({ success: false, message: "User or Course not found" });
    }

    // Check if the user is already following the course
    if (user.followedCourses.includes(courseId)) {
      return res
        .status(409)
        .json({ message: "User is already following the course" });
    }

    // Update the user's followedCourses array with the course ID
    user.followedCourses.push(courseId);
    await user.save();

    res.json({ success: true, message: "Course followed successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error!" });
  }
});

// Lareina: PUT call to unfollow course
router.put("/unfollow", async (req, res) => {
  const body = req.body;
  const { userId, courseId } = body;

  try {
    if (!userId || !courseId) {
      return res
        .status(404)
        .json({ success: false, data: "Incorrect Request!" });
    }

    const user = await User.findById(userId);
    const course = await Course.findById(courseId);

    if (!course || !user) {
      return res
        .status(404)
        .json({ success: false, message: "User or Course not found" });
    }

    // Check if the user is already following the course
    if (!user.followedCourses.includes(courseId)) {
      return res
        .status(409)
        .json({ message: "User is not following the course" });
    }

    // Update the user's followedCourses array without the course ID
    user.followedCourses.pull(courseId);
    await user.save();

    res.json({ success: true, message: "Course unfollowed successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error!" });
  }
});

module.exports = router;
