const express = require('express');
const router = express.Router();

//@route    GEt api/post/test
//@desc     Tests post route
//@access   Public Route

router.get('/test', (req, res) => res.json({
    msg: "Post Works"
}));

module.exports = router;
