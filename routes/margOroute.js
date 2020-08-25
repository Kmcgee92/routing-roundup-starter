const express = require('express');

const router = express.Router();

router.get(("/bio|/contact"), (req, res) => {
    let newCaps = (req.path).slice(1, 2).toUpperCase();
    newCaps += req.path.slice(2).toLowerCase();
    res.send(newCaps);
});



module.exports = router;
