const express = require("express");
const morgan = require("morgan");
//Documentacion
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require("./src/doc/swaggerConfig"); // Importa la configuración de Swagger

const app = express();

app.use(express.json());
app.use(morgan("dev"));

// Agrega la ruta para la documentación de Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use('/api/docs.json', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerSpec);
  });

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