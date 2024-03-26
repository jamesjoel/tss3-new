const routes = require("express").Router();
const Destination = require("../models/Destination")

routes.post("/", async(req, res)=>{
    await Destination.create(req.body)
    res.send({success : true});
})

routes.get("/", async(req, res)=>{
    let result = await Destination.find();
    res.send(result);
})
routes.get("/:x", async(req, res)=>{
    // console.log(req.params.x);
    let cate = req.params.x;
    let result = await Destination.find({ category : cate });
    res.send(result);
})


module.exports = routes;