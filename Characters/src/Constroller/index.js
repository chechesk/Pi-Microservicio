const {catchedAsync} = require("../utils")

module.exports = {

    deleteCharacter: catchedAsync(require("./deleteCharacter")),
    getCharacter: catchedAsync(require("./getCharacter")),
    getCharacters: catchedAsync(require("./getCharacters")),
    createCharacters: catchedAsync(require("./createCharacters")),
    updateCharacter: catchedAsync(require(require("./updateCharacter")))
}