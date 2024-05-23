const express = require("express");
const app = express();

app.use(express.urlencoded({ extended : true}));
app.use(express.json());

app.post("/", (req, res)=>{
    console.log(req.body);
})


app.listen(3000);

// http://127.0.0.1:3000/


// http://localhost:3000/
// http://localhost:3000/about
// http://localhost:3000/contact
