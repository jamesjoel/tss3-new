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

routes.get("/delete/:a", async(req, res)=>{
    let x = req.params.a;
    await Employee.deleteMany({ _id : x});
    res.redirect("/employee/list");
})
routes.get("/detail/:a", async(req, res)=>{
    let x = req.params.a;
    let result = await Employee.find({_id : x});
    let pagedata = { emp : result[0] }
    res.render("pages/employee-detail", pagedata)
    
})

routes.get("/edit/:a", async(req, res)=>{
    let x = req.params.a;
    let result = await Employee.find({_id : x });
    let city = await City.find();
    let pagedata = { emp : result[0], city : city};
    res.render("pages/employee-edit", pagedata);
})

routes.post("/update/:a", async(req, res)=>{
    let x = req.params.a;
    await Employee.updateMany({_id : x}, req.body);
    res.redirect("/employee/list");
})


module.exports = routes;