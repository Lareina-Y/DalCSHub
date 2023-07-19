// Authors:

const express = require('express');

const User = require('../models/user');

const router = express.Router();

// default 
router.get('/all', (req, res) => {
    res.send("List all users !")
});

module.exports = router;