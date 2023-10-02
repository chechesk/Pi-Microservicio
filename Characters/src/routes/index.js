const {Router} = require('express')


const route = Router();

route.use("/Characters", require("./router") )

module.exports = route;