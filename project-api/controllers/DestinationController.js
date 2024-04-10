const routes = require("express").Router();
const Destination = require("../models/Destination")
const path = require("path");

// localhost:8080/api/destination/category/Wildlife

routes.get("/category/:x", async(req, res)=>{
    // console.log(req.params.x);
    let cate = req.params.x;
    let result = await Destination.find({ category : cate });
    res.send(result);
})


// localhost:8080/api/destination   -- ReST API
/*  
    let result = await axios.get(localhost:8080/api/destination)
    let result = await axios.get(localhost:8080/api/destination/101)
    let result = await axios.post(localhost:8080/api/destination/, obj)
    let result = await axios.put(localhost:8080/api/destination/101, obj)
    let result = await axios.delete(localhost:8080/api/destination/101)
*/



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
    // console.log(req.body);
    // console.log(req.files);
    let file = req.files.image;
    let upload_path = path.resolve()+"/assets/destination-images/"+file.name;
    file.mv(upload_path, async(err)=>{
        if(err){
            console.log(err);
            return;
        }
        req.body.image = file.name;
        await Destination.create(req.body)
        res.send({success : true});
    })

    
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

/*
    flipkart.com/api/product        this is a Api (.get)


*/
