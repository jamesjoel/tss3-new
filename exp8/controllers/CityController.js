const routes = require("express").Router()
const City = require("../models/City");


routes.get("/", async(req, res)=>{
    let result = await City.find();
    let pagedata = { result : result };
    res.render("pages/city", pagedata)
})

routes.post("/search", async(req, res)=>{
    // console.log(req.body);
    let x = req.body.sortby;
    if(x=="City Name (A-Z)")
    {
        let result = await City.find().sort({ "name" : 1 });
        let pagedata = { result : result };
        res.render("pages/city", pagedata)
    }
    if(x=="City Name (Z-A)")
    {
        let result = await City.find().sort({ "name" : -1 });
        let pagedata = { result : result };
        res.render("pages/city", pagedata)
    }
    if(x=="State Name (A-Z)")
    {
        let result = await City.find().sort({ "state" : 1 });
        let pagedata = { result : result };
        res.render("pages/city", pagedata)
    }
    if(x=="State Name (Z-A)")
    {
        let result = await City.find().sort({ "state" : -1 });
        let pagedata = { result : result };
        res.render("pages/city", pagedata)
    }
    
})

module.exports = routes;