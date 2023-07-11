const express = require('express'); //importing express 

const app = express(); // this indicates app is using express method to run 

const userRoute = require("./api/routes/routes")

app.use(express.json());

app.use("/", userRoute);

// exporting the app to run on the server 
module.exports = app;