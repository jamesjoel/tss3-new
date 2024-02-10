const routes = require("express").Router();

routes.get("/", (req, res)=>{
    res.render("pages/emi")
})

routes.post("/calculate", (req, res)=>{
    let R = req.body.rate/12/100;  
    let N =  req.body.dur*12;
    let emi = req.body.principle*R*(1+R)**N / [(1+R)**N-1]
    // console.log(emi);

    let pagedata = {emi : emi, pri : req.body.principle, rate : req.body.rate, dur : req.body.dur}
    res.render("pages/calculate", pagedata);
})

module.exports = routes;