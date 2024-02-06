const express = require("express");
const app = express();

// Routes handle
app.get("/about", (a, b)=>{
    b.sendFile(__dirname+"/about.html");
});

app.get("/", (d, c)=>{
    c.sendFile(__dirname+"/home.html")
})

app.get("/contact", (x, y)=>{
    y.sendFile(__dirname+"/contact.html")
})




app.listen(3000);

// http://127.0.0.1:3000/


// http://localhost:3000/
// http://localhost:3000/about
// http://localhost:3000/contact
