const routes = require("express").Router();
const User = require("../models/User");
const sha1 = require("sha1")
const jwt = require("jsonwebtoken")

routes.post("/", async(req, res)=>{
    
    let email = req.body.email; // abc
    let password = sha1(req.body.password);
    let result = await User.find({ $and : [{ email : email }, {password : password}]});
    console.log(result);
    if(result.length > 0)
    {
        let userobj = { id : result[0]._id };
        let token = jwt.sign(userobj, "the stepping stone");
        res.send({ success : true, token : token })
    }
    else
    {
        res.status(401).send("Wrong Email and Password")
    }
})

module.exports = routes;