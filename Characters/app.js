const express = require("express");
const morgan = require("morgan");

const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use(require("./src/routes/index"));

app.use("*", (req,res) =>{
    res.status(404).send("Not Found")
});

app.use((err, req, res, next) =>{
    res.status(err.statusCode || 500 ).json({
        error:true,
        message: err.message
    })
});

module.exports = app;