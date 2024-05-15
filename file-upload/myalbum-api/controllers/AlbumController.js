const routes = require("express").Router();
const Album = require("../models/Album");
const path = require("path");
const {UniqueString}  = require("unique-string-generator")
const jwt = require("jsonwebtoken");

routes.post("/", async(req, res)=>{
    let token = req.headers.authorization;
    let obj = jwt.decode(token, "the stepping stone");
    let photo = req.files.photo;
    let name = photo.name;
    let arr = name.split(".");
    let ext = arr[arr.length-1];
    let str = UniqueString();
    let newname = str+"."+ext;
    photo.mv(path.resolve()+"/assets/user-album/"+newname, async(err)=>{
        let insertobj = { image : newname, userid : obj.id };
        let result = await Album.create(insertobj);
        res.send(result);

    });
})

routes.get("/", async(req, res)=>{
    let token = req.headers.authorization;
    let obj = jwt.decode(token, "the stepping stone");
    let result = await Album.find({ userid : obj.id });
    res.send(result);
})


module.exports = routes;