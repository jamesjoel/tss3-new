const routes = require("express").Router();

routes.get("/", (req, res)=>{
    // res.render("")
    console.log("Home Page");
})

module.exports = routes;