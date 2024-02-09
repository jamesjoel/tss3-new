const routes = require("express").Router()


routes.get("/", (req, res)=>{
    console.log("Help ----- Demo1 ---- ")
})
routes.get("/test1", (req, res)=>{
    console.log("Help ----- Demo1 ---- test1 ")
})
routes.get("/test2", (req, res)=>{
    console.log("Help ----- Demo1 ---- test2")
})

module.exports = routes;