const routes = require("express").Router()

routes.get("*" ,(req,res)=>{
    res.render("pages/wildcard")
})




module.exports = routes