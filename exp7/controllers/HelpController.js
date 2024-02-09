const routes = require("express").Router();

routes.get("/", (req, res)=>{
    console.log("Help Controller ---- ");
})
routes.get("/demo2", (req, res)=>{
    console.log("Help ---- Demo2 Page")
})

module.exports = routes;