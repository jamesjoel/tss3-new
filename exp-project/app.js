const express = require("express");
const app = express();
const routes = require("./allRoutes/AllRoutes")

app.use(express.static(__dirname+"/assets"));
app.set("view engine", "ejs");

app.use(express.json())
app.use(express.urlencoded({ extended : true }));

app.use(routes);
// app.get("*", (req, res)=>{
//     res.render("pages/not-found");
// })

const port = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log("Server Running With Port - ", port)
});