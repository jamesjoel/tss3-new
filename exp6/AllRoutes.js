const express = require("express");
const routes = express.Router();


routes.get("/", (req, res)=>{
    res.render("pages/index");
})

routes.get("/about", (req, res)=>{
    res.render("pages/about")
})

module.exports = routes;