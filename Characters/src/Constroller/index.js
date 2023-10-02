const {catchedAsync} = require("../utils")

module.exports = {
        getCharacter: catchedAsync(require("./getCharacter")),
        getCharacters: catchedAsync(require("./getCharacters")),
        deleteCharacter: catchedAsync(require("./deleteCharacter")),
        createCharacters: catchedAsync(require("./createCharacters")),
        updateCharacter: catchedAsync(require("./updateCharacter"))
}