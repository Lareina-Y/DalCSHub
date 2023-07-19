// Authors: Shiwen(Lareina)

const express = require('express');
const Course = require('../models/course');

const router = express.Router();

// Lareina: POST call to create a new course
router.post('/add', async (req, res) => {
    const body = req.body;

    try {
        if(Object.keys(body).length == 0) {
            return res.status(404).json({success: false, data: "Incorrect Request!"});
        }
    }
    catch(err) {
        return res.status(500).json({message: "Internal server error!"});
    }

    let newCourse = await new Course(body);

    newCourse.save()
    .then(result => {
        return res.status(200).json({
            newCourse: result,
            success: true,
            message: "Course successfully added."
        });
    }).catch(err => {
        if (err.code === 11000) { // MongoDB error code for duplicate key
            return res.status(409).json({ success: false, message: "Course already exists." });
        }
        return res.status(400).send({message: "Course request cannot be submitted" + err});
    });
});

module.exports = router;