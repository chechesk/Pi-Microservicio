const express = require("express")
const morgan = require("morgan")

const app = express();

app.use(express.json());
app.use(morgan("dev"));

app.use(require("./src/routes"));

module.exports = app;