const express = require("express");
const app = express();

app.use(express.static(__dirname+"/assets"));
app.set("view engine", "ejs");

app.get("/", (req, res)=>{
    let a = "indore";
    let b = "mumbai";

    let pagedata = { x : a, y : b };

    res.render("index", pagedata);
})
app.get("/about", (req, res)=>{
    res.render("about");
})
app.get("/contact", (req, res)=>{
    let user = [
        {
            name : "rohit",
            fee : 7000,
            gender : "male",
            city : "indore"
        },
        {
            name : "nidhi",
            fee : 6000,
            gender : "female",
            city : "pune"
        },
        {
            name : "aman",
            fee : 8000,
            gender : "male",
            city : "mumbai"
        },
        {
            name : "gaurav",
            fee : 7000,
            gender : "male",
            city : "indore"
        },
        {
            name : "jaya",
            fee : 10000,
            gender : "female",
            city : "pune"
        },
        {
            name : "nilesh",
            fee : 4580,
            gender : "male",
            city : "bhopal"
        }
    ]

    let pagedata = {user : user}


    res.render("contact", pagedata);
})



app.listen(3000, ()=>{
    console.log("server running");
})