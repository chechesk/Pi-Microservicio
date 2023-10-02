const Films = require("../data")
const {response} = require("../utils")

module.exports = async (req, res) =>{
    const film = await Films.update(req.params.id, req.body)
    response(res,200,film)
}