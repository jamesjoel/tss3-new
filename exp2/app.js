const express = require("express")
const app = express();
const fs = require("fs");

app.get("/file", (req, res)=>{

    let myfile = fs.createWriteStream("demo.xls")

    var header="Sl No"+"\t"+" Age"+"\t"+"Name"+"\n";
    myfile.write(header)


    var row1 = "0"+"\t"+" 21"+"\t"+"Rob"+"\n";
    
    myfile.write(row1)
    


    myfile.close();
    res.send("success");
})



app.get("/", (req, res)=>{
    res.sendFile(__dirname+"/index.html");
});

app.get("/about", (req, res)=>{
    res.sendFile(__dirname+"/about.html")
})

app.get("/contact", (req, res)=>{
    res.sendFile(__dirname+"/contact_us.html");
})

app.get("*", (req, res)=>{
    res.sendFile(__dirname+"/not_found.html");
})





app.listen(3000, ()=>{ 
    console.log("server running")
 });