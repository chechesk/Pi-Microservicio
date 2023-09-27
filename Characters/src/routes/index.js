const {Router} = require('express')


const route = Router();

route.use("/characters", require("./router") )

module.exports = route;