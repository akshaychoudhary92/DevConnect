const express = require('express');
const router = express.Router();

//@route    GEt api/user/test
//@desc     Tests user route
//@access   Public Route

router.get('/test', (req, res) => res.json({
    msg: "Users Works"
}));

module.exports = router;
