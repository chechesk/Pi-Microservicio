const {Router} = require("express");
const controller = require("../controller");

const route = Router();

route.get("/", controller.getPlanets);

route.get("/:id", controller.getPlanet);

route.post("/", middlewares.characterValidation, controller.createPlanets);

route.put("/:id", controller.updatePlanet);

route.delete("/:id", controller.deletePlanet);


module.exports = route;