const routes = require("express").Router();

routes.get("/", (req, res)=>{
    console.log("About Page");
})
routes.get("/info1", (req, res)=>{
    console.log("About Page ----- Info1");
})
routes.get("/info2", (req, res)=>{
    console.log("About Page ---- info2");
})

module.exports = routes;