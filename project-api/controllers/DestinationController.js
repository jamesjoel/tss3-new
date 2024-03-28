const routes = require("express").Router();
const Destination = require("../models/Destination")

// localhost:8080/api/destination

routes.get("/category/:x", async(req, res)=>{
    // console.log(req.params.x);
    let cate = req.params.x;
    let result = await Destination.find({ category : cate });
    res.send(result);
})



// return all data
routes.get("/", async(req, res)=>{
    let result = await Destination.find();
    res.send(result);
})
// return perticular data
routes.get("/:id", async(req, res)=>{
    let result = await Destination.find({_id : req.params.id});
    res.send(result[0]);
})
routes.post("/", async(req, res)=>{
    await Destination.create(req.body)
    res.send({success : true});
})
routes.put("/:id", async(req, res)=>{
    await Destination.updateMany({_id : req.params.id},req.body)
    res.send({success : true});
})
routes.delete("/:id", async(req, res)=>{
    await Destination.deleteMany({_id : req.params.id})
    res.send({success : true});
})



// localhost:080/api/destination/category/Wildlife



module.exports = routes;