const axios = require("axios")

const getdata = async () => {
    try {
      const response = await axios.get("http://localhost:3004/Character");
      return response.data; // Utiliza response.data para obtener los datos de la respuesta.
    } catch (error) {
      throw error; // Rechaza la promesa si ocurre un error en la solicitud.
    }
  };

  

module.exports = {
    list: async () => {
        const characters = await getdata(); // Llama a la función getdata para obtener los personajes.
        return characters; // Retorna los personajes obtenidos.
      },
      create: async () => {
        throw new Error("Hay un error en la BDD al crear el personaje, comprueba los datos"); // Lanza un error si ocurre un problema al crear el personaje.
      },
    };