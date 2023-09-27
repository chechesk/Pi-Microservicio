const characters = require("./characters.json")

module.exports = {
    list: async () => {
        return characters
    },
    create: async () =>{
        throw Error("Hay un error en la BDD al crear personaje compare datos")
    },
};