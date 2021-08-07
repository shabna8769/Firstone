
var express = require('express');
var router = express.Router();
//@route POST api/users
//@desc Register route
//@access Public


router.get('/', (req, res) =>

    res.send('User route'));


module.export = router;
