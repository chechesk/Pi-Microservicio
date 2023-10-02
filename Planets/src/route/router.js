const {Router} = require("express");
const controller = require("../controller");
const Middlewares = require("../Middlewares");

const route = Router();

route.get("/", controller.getPlanets);

route.get("/:id", controller.getPlanet);

route.post("/", Middlewares.planetValidation, controller.createPlanets);

route.put("/:id", controller.updatePlanet);

route.delete("/:id", controller.deletePlanet);


module.exports = route;