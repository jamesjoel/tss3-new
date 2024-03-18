const routes = require("express").Router();

// localhost:8080/api/city

routes.use("/api/city", require("../controllers/CityController"));
routes.use("/api/demo", require("../controllers/DemoController"));
routes.use("/api/signup", require("../controllers/SignupController"));
routes.use("/api/userauth", require("../controllers/UserAuthController"));

module.exports = routes;