const routes = require("express").Router();

routes.get("/", (req, res)=>{
    res.render("pages/index");

})

module.exports = routes;