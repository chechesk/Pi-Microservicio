const {Router} = require("express")
const controller = require("../Constroller")
const middlewares = require("../Middlewares")

const route = Router()

route.get("/", controller.getCharacters);

route.get("/:id", controller.getCharacter);

route.delete("/:id", controller.deleteCharacter);

route.post("/", middlewares.characterValidation, controller.createCharacters);

route.put("/:id", controller.updateCharacter);

module.exports = route;