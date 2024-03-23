const routes = require("express").Router();

// localhost:8080/api/city

/*
    routes = ()=>{
        
    }

*/

routes.use("/api/city", require("../controllers/CityController"));
routes.use("/api/demo", require("../controllers/DemoController"));
routes.use("/api/signup", require("../controllers/SignupController"));
routes.use("/api/userauth", require("../controllers/UserAuthController"));
routes.use("/api/adminauth", require("../controllers/AdminAuthController"));

module.exports = routes;

/*
    let a = 10;

    let b = ()=>{

    }

    b()


*/