const server = require("./app")

const { Character, Films, Planets} = require("./src/model/")

//Character.list().then((res) => console.log(res));
//Character.get(1).then((res) => console.log(res));
//Character.insert({}).then((res)=> console.log(res));
Films.list().then((res) => console.log(res));

server.listen(3004, ()=>{
    console.log("Lister Database port 3004");
});     