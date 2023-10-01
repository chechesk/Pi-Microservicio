const axios = require("axios")
  
const url_conn = "http://database:3004/Character";

module.exports = {
  list: async () => {
    const { data } = await axios.get(url_conn);
    return data;
  },
  create: async (character) => {
    // throw new Error("DB ERROR: Method not implemented");
    const { data } = await axios.post(url_conn,character);
    return data;
  },
  get: async(id) =>{
    const { data } = await axios.get(`${url_conn}/${id}`),
    return data
  },
  delete: async (id) =>{
    const { data } = await axios.delete(`${url_conn}/${id}`),
    return data
  },
  update: async (id, character) =>{
    const {data} = await axios.put(`${url_conn}/${character}`),
    return data  
  }
}
