const {Router} = require("express")
const controller = require("../Constroller")
const middlewares = require("../Middlewares")

const route = Router()

route.get("/", controller.getCharacters);

route.get("/:id", controller.getCharacter);

route.post("/", middlewares.characterValidation, controller.createCharacters);

route.put("/:id", controller.updateCharacter);

route.delete("/:id", controller.deleteCharacter);

module.exports = route;