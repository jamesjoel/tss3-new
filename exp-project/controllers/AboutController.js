const routes = require("express").Router();

routes.get("/:a/:b/:c", (req, res)=>{
    let x = req.params.a;
    let y = req.params.b;
    let z = req.params.c;

    console.log(x, y, z);


    res.render("pages/about")
})

module.exports = routes;