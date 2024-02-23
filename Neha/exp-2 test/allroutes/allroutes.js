let routes = require("express").Router();

routes.use("/" , require("../controllers/homecontroller"))
routes.use("/user" ,require("../controllers/usercontroller"))

module.exports = routes