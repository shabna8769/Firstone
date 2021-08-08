const express = require('express');
const router = express.Router();
//@route POST api/users
//@desc Register route
//@access Public


router.get('/', (req, res) =>

    res.send('User profile'));


module.export = router;
