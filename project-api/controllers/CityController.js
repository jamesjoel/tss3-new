const routes = require("express").Router();
const City = require("../models/City");


// localhost:8080/api/city

routes.get("/", async(req, res)=>{
    let result = await City.find();
    res.send(result);
})

module.exports = routes;

/*
    res.sendFile ---- send HTML file
    res.render ---- ejs+data
    res.redirect ---- redirect

    res.send(data);
*/