const routes = require("express").Router();
const Teacher = require("../models/Teacher")

routes.get("/", (req, res)=>{
    res.render("pages/teacher");
})
routes.post("/save", async(req, res)=>{
    await Teacher.create(req.body);
    res.redirect("/teacher/list");
})
routes.get("/list", async(req, res)=>{
    let result = await Teacher.find();
    let pagedata = { result : result };
    res.render("pages/teacher-list", pagedata);
})
routes.get("/delete/:id", async(req, res)=>{
    let id = req.params.id;
    await Teacher.deleteMany({ _id : id });
    res.redirect("/teacher/list");
})
routes.get("/edit/:id", async(req, res)=>{
    let id = req.params.id;
    let result = await Teacher.find({ _id : id });
    let pagedata = { result : result[0] };
    res.render("pages/teacher-edit", pagedata);
})

routes.post("/update/:id", async(req, res)=>{
    let id = req.params.id;
    await Teacher.updateMany({ _id : id }, req.body);
    res.redirect("/teacher/list");
})


module.exports = routes;