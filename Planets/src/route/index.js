const {Router} = require("express")

const route = Router();

route.use("/planets", (require("./router")))

module.exports = route;