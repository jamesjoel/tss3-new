const routes = require("express").Router();

routes.get("/", (req, res)=>{
    res.render("pages/student")
})

routes.post("/save", (req, res)=>{
    console.log(req.body);
})

module.exports = routes;