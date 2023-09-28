const axios = require("axios")

const getdata = async () => {
    try {
      const response = await axios.get("http://localhost:3004/Film");
      return response.data; // Utiliza response.data para obtener los datos de la respuesta.
    } catch (error) {
      throw error; // Rechaza la promesa si ocurre un error en la solicitud.
    }
  };

  

module.exports = {
    list: async () => {
        const Film = await getdata(); // Llama a la función getdata para obtener los personajes.
        return Film; // Retorna los personajes obtenidos.
      },

}
