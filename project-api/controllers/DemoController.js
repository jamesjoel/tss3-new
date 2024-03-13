const routes = require("express").Router();

// localhost:8080/api/demo -----> post
routes.post("/", async(req, res)=>{
    console.log(req.body);
    res.send({ success : true });
})

module.exports = routes;