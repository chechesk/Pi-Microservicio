const express = require("express")
const morgan = require("morgan")

const app = express();
app.use(express.json());
app.use(morgan("dev"));

app.use(require("./src/router"));

app.use("*", (req,res) =>{
    res.status(404).send("Not Found")
});

module.exports = app;