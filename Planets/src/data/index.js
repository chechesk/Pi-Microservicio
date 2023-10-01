const axios = require("axios")

const getdata = async () => {
    try {
      const response = await axios.get("http://database:3004/Planet");
      return response.data; // Utiliza response.data para obtener los datos de la respuesta.
    } catch (error) {
      throw error; // Rechaza la promesa si ocurre un error en la solicitud.
    }
  };

  

module.exports = {
    list: async () => {
        const Planet = await getdata(); // Llama a la función getdata para obtener los personajes.
        return Planet; // Retorna los personajes obtenidos.
      },

}
