const Characters = require("../data");
const { response } = require("../utils");

module.exports = async (req,res) =>{
    const {id} = req.params;
    const character = await Characters.delete(id);
    response(res,201,character)
}