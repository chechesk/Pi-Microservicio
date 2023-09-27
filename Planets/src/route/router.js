const {Router} = require("express");
const controller = require("../controller");

const route = Router();

route.get("/",  controller.getPlanets)

module.exports = route;