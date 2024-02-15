const routes = require("express").Router();
const Employee = require("../models/Employee");

routes.get("/", (req, res)=>{
    res.render("pages/employee")
})

routes.post("/add", async(req, res)=>{
    await Employee.create(req.body);
    res.redirect("/employee/list");
})

routes.get("/list", async(req, res)=>{
    let abc = await Employee.find();
    let pagedata = { data : abc };
    res.render("pages/employee-list", pagedata);
})

module.exports = routes;