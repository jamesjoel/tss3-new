const express = require("express")
const app = express();

// app.use() ---- this function call auto before any other route function call
app.use(express.static(__dirname+"/assets"));
app.set("view engine", "ejs");

app.get("/", (req, res)=>{

    let color = ["red", "green", "blue"];

    let obj = { abc : color };

    res.render("index", obj)
})





app.get("/about", (req, res)=>{
    let name = "rohit";
    let age = 25;
    let city = "indore";

    let obj = { name : name, age : age, city : city, gender : "male" };

    res.render("about", obj)
})









app.get("/contact", (req, res)=>{
    res.render("contact")
})


app.listen(3000, ()=>{ 
    console.log("server running")
 });