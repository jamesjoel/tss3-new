const routes = require("express").Router();
// npm i mongoose
const mongoose = require("mongoose");
// getting all functions from mongoose module

// we have to connect express into mongodb by connection url
mongoose.connect("mongodb://0.0.0.0:27017/tss5");

// we have to set incoming data pattern by Schema
let StudentSchema = mongoose.Schema({
    name : String,
    age : Number,
    city : String
}); // , {collection : "student"}

// select a collection for insert, update, delete, fetch data by model
let Student = mongoose.model("student", StudentSchema);
// model


routes.get("/", (req, res)=>{
    res.render("pages/student")
})

routes.post("/save", async(req, res)=>{
    await Student.create(req.body);
    res.redirect("/student");
    // model.create(data)

})

module.exports = routes;