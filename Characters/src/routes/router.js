const {Router} = require("express")
const controller = require("../Constroller")
const middlewares = require("../Middlewares")

const route = Router()

route.get("/", controller.getCharacters);

route.post("/", middlewares.characterValidation, controller.createCharacters)

module.exports = route;