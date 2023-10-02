const axios = require("axios")
  
const url = "http://database:3004/Film";

module.exports = {
  list: async () => {
    const { data } = await axios.get(url);
    return data;
  },
  create: async (character) => {
    // throw new Error("DB ERROR: Method not implemented");
    const { data } = await axios.post(url,character);
    return data;
  },
  get: async(id) =>{
    const { data } = await axios.get(`${url}/${id}`),
    return data
  },
  delete: async (id) =>{
    const { data } = await axios.delete(`${url}/${id}`),
    return data
  },
  update: async (id, character) =>{
    const {data} = await axios.put(`${url}/${character}`),
    return data  
  }
}
