const Planets = require("../data");
const {response} = require("../utils")

module.exports = async(req,res) =>{
    const planet = await Planets.update(req.params.id, req.body)
    response(res,200, planet)
}