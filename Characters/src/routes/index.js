const {Router} = require('express')


const route = Router();

route.use("/character", require("./router") )

module.exports = route;