const routes = require("express").Router()

routes.use("/", require("../controllers/HomeController"));
routes.use("/teacher", require("../controllers/TeacherController"));
routes.use("/city", require("../controllers/CityController"));

module.exports = routes;