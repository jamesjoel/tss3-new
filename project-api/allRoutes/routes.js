const routes = require("express").Router();

// localhost:8080/api/city

routes.use("/api/city", require("../controllers/CityController"));

module.exports = routes;