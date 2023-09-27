const {Router} = require("express");
const controller = require("../Controllers")
const route = Router();

route
    .get("/", controller.getFilms)
    .post("/", (req,res)=> { res.status(200).send("Creando")})
    .delete("/", (req,res)=> { res.status(200).send(id)})
    .put
    .patch
module.exports = route;