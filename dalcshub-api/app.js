const express = require("express"); // importing express 
const mongoose = require("mongoose"); // importing mongoose

const app = express(); // this indicates app is using express method to run 

const userRoutes = require("./api/routes/user")
const courseRoutes = require("./api/routes/course")

const mongoURL = "mongodb+srv://dalcshub:summer23@main.avjsilz.mongodb.net/dalcshub?retryWrites=true&w=majority"

// connecting to MongoDB
mongoose.connect(mongoURL, {useNewUrlParser: true})
.then(() => {
    console.log("Connected to mongoDB")
})
.catch((err) => {
    console.log("MongoDB connection failed", err)
})

app.use(express.json());

// Routes
app.use('/api/course', courseRoutes);
app.use('/api/user', userRoutes); 

app.use("/", (req, res) => {
    return res.status(404).json({
        message: "Route not found",
        success: false
    })
});

// exporting the app to run on the server 
module.exports = app;