const express = require('express');

const router = express.Router();

// default 
router.get('/', (req, res) => {
    res.send("Welcom to use the REST API of DalCSHub !")
});

module.exports = router;