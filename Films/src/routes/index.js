const {Router} = require("express") 
const route = Router();

route.use("/films", require("./router") )

module.exports = route;