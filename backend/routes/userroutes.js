const express = require('express');
const userRouter = express.Router();
var bcrypt = require('bcryptjs');
var salt = bcrypt.genSaltSync(10);
var jwt = require('jsonwebtoken');
const usermodel = require('../models/usermodels');

userRouter.post('/register', async (req, res) => {
    try {
        var hash = bcrypt.hashSync(req.body.password, salt);
        console.log("hashpassword", hash);
        req.body.password = hash;

        let user = await usermodel.insertMany(req.body);
        console.log(user);

        return res.json({ data: user }); // Return to avoid multiple responses
    } catch (error) {
        return res.status(500).json({ msg: "Error in registration", error });
    }
});

userRouter.post('/login', async (req, res) => {
    try {
        const userdata = await usermodel.findOne({ name: req.body.name });
        console.log(userdata);

        if (!userdata) {
            return res.json({ msg: "User not found" }); 
        }

        const ans = bcrypt.compareSync(req.body.password, userdata.password);
        console.log(ans);

        if (ans === true) {
            var token = jwt.sign({ userid: userdata._id }, 'shhhhh');
            return res.json({ msg: "User login successful", token });
        } else {
            return res.json({ msg: "Wrong password" });
        }
    } catch (error) {
        return res.status(500).json({ msg: "Something went wrong", error });
    }
});

module.exports = userRouter;
