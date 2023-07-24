const express = require("express"); // importing express
const mongoose = require("mongoose"); // importing mongoose
const app = express(); // this indicates app is using express method to run 
const mongoURL = "mongodb+srv://dalcshub:summer23@main.avjsilz.mongodb.net/dalcshub?retryWrites=true&w=majority"

// connecting to MongoDB
mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log("Connected to mongoDB")
})
.catch((err) => {
    console.log("MongoDB connection failed", err)
});

const userRoutes = require("./api/routes/user")
const courseRoutes = require("./api/routes/course")

app.use(express.json());

const PORT = process.env.PORT

// Routes
app.use('/api/course', courseRoutes);

// app.use(require('./api/routes/user')); 
app.use('/api/user', userRoutes);

app.use("/", (req, res) => {
    return res.status(404).json({
        message: "Route not found, okay",
        success: false
    })
});

// exporting the app to run on the server
module.exports = app;
