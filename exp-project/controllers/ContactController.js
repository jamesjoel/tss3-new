const routes = require("express").Router();

routes.get("/local", (req, res)=>{
    res.render("pages/contact-local")
})
routes.get("/global", (req, res)=>{
    res.render("pages/contact-global")
})

module.exports = routes;