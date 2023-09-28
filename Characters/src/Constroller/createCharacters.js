const Characters = require("../data")
const response = require("../utils")

module.exports = async (req,res) => {
    try {
        // Crea un nuevo personaje utilizando la función Characters.create()
        const newCharacter = await Characters.create();
    
        // Envía una respuesta HTTP 201 (creado) junto con los datos del nuevo personaje
        response(res, 201, {
          success: true,
          message: "Personaje creado con éxito",
          data: newCharacter,
        });
      } catch (error) {
        // En caso de error, envía una respuesta de error
        response(res, 500, {
          success: false,
          message: "Error al crear el personaje",
          error: error.message, // Puedes incluir detalles del error si es necesario
        });
      }
}