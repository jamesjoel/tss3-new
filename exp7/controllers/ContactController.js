const routes = require("express").Router();

routes.get("/", (req, res)=>{
    console.log("Contact Page")
});
routes.get("/local", (req, res)=>{
    console.log("Contact Page ----- local")
});
routes.get("/global", (req, res)=>{
    console.log("Contact Page ----- global")
});

module.exports = routes;