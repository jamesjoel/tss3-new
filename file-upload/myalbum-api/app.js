const express = require("express");
const app = express();
const routes = require("./routes/routes")
const cors = require("cors")
const upload = require("express-fileupload")


app.use(express.static(__dirname+"/assets"));
app.use(express.urlencoded({ extended : true }));
app.use(express.json());
app.use(cors());
app.use(upload());
app.use(routes);

const port = process.env.PORT || 8080;
app.listen(port,  ()=>{
    console.log("Server Running with Port : ", port);
})