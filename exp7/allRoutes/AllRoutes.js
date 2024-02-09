const routes = require("express").Router();

routes.use("/", require("../controllers/HomeController"));
routes.use("/about", require("../controllers/AboutController"));
routes.use("/contact", require("../controllers/ContactController"));
routes.use("/help", require("../controllers/HelpController"));
routes.use("/help/demo1", require("../subControllers/Demo1SubController"));


module.exports = routes;