const express = require("express")
const app = express();

// app.use() ---- this function call auto before any other route function call
app.use(express.static(__dirname+"/assets"));

app.get("/", (req, res)=>{
    res.sendFile(__dirname+"/index.html");
});
app.get("/about", (req, res)=>{
    res.sendFile(__dirname+"/about.html");
});
app.get("/contact", (req, res)=>{
    res.sendFile(__dirname+"/contact.html");
});



app.listen(3000, ()=>{ 
    console.log("server running")
 });