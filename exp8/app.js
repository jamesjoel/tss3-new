const express = require("express");
const app = express();
const routes = require("./allRoutes/AllRoutes")

app.set("view engine", "ejs");

app.use(express.static(__dirname+"/assets"));
app.use(express.urlencoded({ extended : true }));
app.use(express.json());

app.use(routes);

const port = process.env.PORT || 3001;
app.listen(port, ()=>{
    console.log("Server Running with Port : ", port);
})