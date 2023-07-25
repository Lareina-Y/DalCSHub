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


//Author: Vrund Patel
//adding user's details to the database (user's registration)
router.post('/x', async(req, res) => {

    const {firstName, lastName, type, email, password} = req.body

    if( !firstName || !lastName || !type || !email || !password ){
        return res.status(422).json({ error: "Atleast one of field is missing" });
    }

    try {
        
        const exist = await User.findOne({ email: email });

        if(exist){
            return res.status(422).json({ error: "Email already exist" })
        }

        const user = new User({firstName, lastName, type, email, password});
        const userRegister = await user.save()

        if(userRegister){
            res.status(201).json({ message: "User registerd successfully :)"})
        }
        else{
            res.status(500).json({ error: "Registration Failed :(" })
        }
    } catch (error) {
        console.log(` error ${error}`)
    }
});

//Author: Vrund Patel
//Authenticates the user crendentials
router.post('/signin', async(req, res) => {
    
    try {
        
        const {email, password} = req.body

        if( !email || !password){
            return res.status(400).json({error: "Atleast one of the field is empty from backend"})
        }

        const userLogin = await User.findOne( {email: email} )
        if(userLogin){

            if(password === userLogin.password){
                res.json({message: "Signin Successful :)"})
            }
            else{
                res.status(400).json({error: "Invalid Credentails :( "})
            }
        }
        else{
            res.status(400).json({error: "Invalid Credentials :( "})
        }
        
    } catch (error) {
        console.log(error)
    }
})

module.exports = router;
