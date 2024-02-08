const express = require("express");
const app = express();

const AllRoutes = require("./AllRoutes");

app.set("view engine", "ejs");
app.use(express.static(__dirname+"/assets"));

app.use(AllRoutes);


let port = process.env.PORT || 3000;
app.listen(port, (req, res)=>{
    console.log("Server Running -----");
})