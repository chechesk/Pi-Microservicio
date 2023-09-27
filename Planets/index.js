const server = require("./app")

const PORT = 3003

server.listen(PORT, ()=>{
    console.log(`Escuchando en el puerto ${PORT}`);
})