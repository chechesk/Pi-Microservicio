const axios = require("axios")
  
const url_conn = "http://localhost:3004/Character";

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

}
