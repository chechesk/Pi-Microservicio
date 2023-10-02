const {Router} = require("express");
const controller = require("../Controllers")
const route = Router();

route.get("/", controller.getCharacters);

route.get("/:id", controller.getFilm);

route.post("/", middlewares.characterValidation, controller.createPlanets);

route.put("/:id", controller.updateFilm);

route.delete("/:id", controller.deleteFilm);

module.exports = route;

