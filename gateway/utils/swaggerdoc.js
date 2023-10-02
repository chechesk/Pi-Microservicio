const swaggerJSDoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0', // Especifica la versión de OpenAPI (3.0.0 es la última versión)
    info: {
      title: 'Api Gateway Star Wars', // Cambia esto al título de tu API
      version: '1.0.0', // Cambia esto a la versión de tu API
      description: 'Micro Servicio Api Gateway Star Wars con 4 servicios',
    },
  },
  // Especifica las rutas que deseas documentar aquí
  apis: ['./routes/*.js'], // Por ejemplo, todos los archivos .js en el directorio de rutas
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;