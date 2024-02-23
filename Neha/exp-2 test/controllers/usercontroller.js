const routes = require("express").Router()
const User = require("../model/User")

routes.get("/" ,(req,res)=>{
    res.render("pages/user")
})

routes.post("/save", async(req,res)=>{
    await User.create(req.body)
    res.redirect("/user/list")
})

routes.get("/list", async(req,res)=>{
   let result= await User.find()
   let pagedata = {result:result}
   res.render("pages/user-list",pagedata)
})

routes.get("/edit/:id", async(req,res)=>{
    let id = req.params.id
    let result= await User.find({_id:id})
    let pagedata = {result:result[0]}
    res.render("pages/user-edit",pagedata)
 })

 routes.get("/delete/:id", async(req,res)=>{
    let id = req.params.id
    await User.deleteMany({_id:id})
    
    res.redirect("/user/list")
 })
 routes.post("/update/:id", async(req,res)=>{
    let id = req.params.id
    await User.updateMany({_id:id}, req.body )
    
    res.redirect("/user/list")
 })



module.exports= routes