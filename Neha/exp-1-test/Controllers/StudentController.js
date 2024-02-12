const routes = require("express").Router()



routes.get("/list" ,(req,res)=>{
    res.render("pages/list")
})

routes.get("/add" ,(req,res)=>{
    res.render("pages/add")
})



module.exports = routes
