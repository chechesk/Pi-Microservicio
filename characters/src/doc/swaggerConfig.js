const swaggerJSDoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API del Microservicio Character',
      version: '1.0.0',
      description: 'API para gestionar personajes',
    },
  },
  apis: ['./routes/character.js'], // Ruta al archivo de rutas de "Character"
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
