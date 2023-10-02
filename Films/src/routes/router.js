const {Router} = require("express");
const controller = require("../Controllers")
const middlewares = require("../Middlewares")
const route = Router();

route.get("/", controller.getFilms);

route.get("/:id", controller.getFilm);

route.post("/", middlewares.filmValidation, controller.createFilms);

route.put("/:id", controller.updateFilm);

route.delete("/:id", controller.deleteFilm);

module.exports = route;

