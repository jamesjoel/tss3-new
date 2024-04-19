const routes = require("express").Router();

const User = require("../models/User");
const jwt = require("jsonwebtoken");
const sha1 = require("sha1")

routes.get("/", async(req, res)=>{
    let result = await User.find();
    res.send(result);
})

routes.put("/:id", async(req, res)=>{
    let id = req.params.id;
    await User.updateMany({ _id : id }, req.body);
    res.send({ success : true });
})


routes.get("/profile", async(req, res)=>{
    let token = req.headers.authorization;
    let info = jwt.decode(token, "the stepping stone");
    let result = await User.find({ _id : info.id });
    res.send(result[0]);
})

routes.post("/update_pass", async(req, res)=>{
    let token = req.headers.authorization;
    let info = jwt.decode(token, "the stepping stone");
    let result = await User.find({ _id : info.id });
    if(result[0].password == sha1(req.body.current_pass))
    {
        await User.updateMany({ _id : info.id }, { password : sha1(req.body.new_pass)});
        res.send({ success : true })
    }
    else
    {
        res.send({ success : false })

    }
})

module.exports = routes;