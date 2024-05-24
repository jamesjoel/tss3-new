const express = require("express")
const app = express();
const upload = require("express-fileupload")
const cors = require("cors")
var XLSX = require('xlsx')

const mongoose = require("mongoose")
mongoose.connect("mongodb://0.0.0.0:27017/tss5");

const SheetSchema = mongoose.Schema({
    firstname : String,
    lastname : String,
    age : Number,
    country : String,
    gender : String,
    date : String
})

const Sheet = mongoose.model("sheet", SheetSchema);


// app.use() ---- this function call auto before any other route function call
app.use(express.json())
app.use(express.urlencoded({ extended : true}))
app.use(upload())
app.use(cors())
app.use(express.static(__dirname+"/assets"));
app.set("view engine", "ejs");

app.post("/upload", async(req, res)=>{
    let file = req.files.file;
    let name = file.name;
    file.mv(__dirname+"/sheets/"+name, async(err)=>{
        if(err) return;
        var workbook = XLSX.readFile(__dirname+"/sheets/"+name);
    var sheet_name_list = workbook.SheetNames;
    var xlData = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);
    await Promise.all(xlData.map(async(item)=>{
        let obj = { 
                firstname : item["First Name"],  
                lastname : item["Last Name"],
                gender : item["Gender"],
                age : item["Age"],
                country : item["Country"],
                date : item["Date"]
            }
        await Sheet.create(obj);
    }))
    res.send({success : true});
    });


    


})





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


app.listen(8080, ()=>{ 
    console.log("server running")
 });