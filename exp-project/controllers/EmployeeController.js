const routes = require("express").Router();
const Employee = require("../models/Employee");
const City = require("../models/City");

routes.get("/", async(req, res)=>{

    let city = await City.find();
    let pagedata = {city : city};

    res.render("pages/employee", pagedata)
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