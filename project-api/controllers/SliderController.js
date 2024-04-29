const routes = require("express").Router();
const Slider = require("../models/Slider")
const { UniqueString } = require("unique-string-generator")
const path = require("path");

routes.post("/", async(req, res)=>{
    let unique_name = UniqueString();
    let file = req.files.image; // 1.jpg
    let arr = file.name.split(".");
    let ext = arr[arr.length-1];

    let new_name = unique_name+"."+ext;
    let upload_path = path.resolve()+"/assets/slider/"+new_name;
    file.mv(upload_path, async(err)=>{
        if(err){
            console.log(err);
            return;
        }
        let obj = { name : new_name };
        let result =await Slider.create(obj)
        res.send(result);
    })
})


routes.get("/", async(req, res)=>{
    let result = await Slider.find();
    res.send(result);
})
routes.get("/images", async(req, res)=>{
    let result = await Slider.find({status:1});
    res.send(result);
})

routes.put("/:id", async(req, res)=>{
    await Slider.updateMany({_id : req.params.id}, req.body);
    res.send({success : true});
})

module.exports = routes;