const axios = require("axios")
  
const url_conn = "http://database:3004/Film";

module.exports = {
  list: async () => {
    const { data } = await axios.get(url_conn);
    return data;
  },

}
