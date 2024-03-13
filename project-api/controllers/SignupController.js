const routes = require("express").Router();
const User = require("../models/User")

routes.post("/", async(req, res)=>{

    await User.create(req.body);
})

module.exports = routes;