const server = require("./app")

const { Character, Film, Planet} = require("./src/model/")

//Character.list().then((res) => console.log(res));
//Character.get(1).then((res) => console.log(res));
//Character.insert({}).then((res)=> console.log(res));

//Film.insert({}).then((res)=> console.log(res));

server.listen(3004, ()=>{
    console.log("Lister Database port 3004");
});     