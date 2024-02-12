const routes = require("express").Router()

routes.use("/" ,require("../Controllers/HomeController"))

routes.use("/about" ,require("../Controllers/AboutController"))

routes.use("/student" ,require("../Controllers/StudentController"))


routes.use("*" ,require("../Controllers/WildcardController"))





module.exports = routes