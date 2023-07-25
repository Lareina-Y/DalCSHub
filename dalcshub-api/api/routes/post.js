// Author: Khaled Al-Mahbashi
const express = require('express');
const Post = require('../models/post')
const router = express.Router();

// get post by ID
router.get('/:id', (req, res) => {
    const id = req.params.id;

    try {
        Post.findById(id).then(response =>{
            if(response == null){
                res.status(404).send("This post does not exist")
            } else {
                res.status(200).send("Post information: " + response)
            }
        })
    } catch (err) {
        return res.status(500).json({message: 'Internal server error'})
    }
})

// add post
router.post('/add', async (req, res) => {
    const body = req.body;

    try {
        if(Object.keys(body).length == 0){
            res.status.apply(400).json({success: false, data: 'Incorrect request'})
        }  
    } catch (err) {
        return res.status(500).json({message: 'Internal server error'})
    }

    let newPost = await new Post();
    newPost.title = body.title;
    newPost.author = body.author;
    newPost.description = body.description;
    newPost.date;

    newPost.save()
    .then(result =>{
        res.status(200).send({
            newPost: result,
            success: true,
            "message": "Post has been added"
        })
    }).catch(err =>{
        res.status(400).send({message: "Post request cannot be submitted " + err});
    })
})
module.exports = router;