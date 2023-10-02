/**
 * @swagger
 * components:
 *   schemas:
 *     Character:
 *       type: object
 *       properties:
 *         // Define las propiedades comunes de Character aquí
 *     Film:
 *       type: object
 *       properties:
 *         // Define las propiedades comunes de Film aquí
 *     Planet:
 *       type: object
 *       properties:
 *         // Define las propiedades comunes de Planet aquí
 *
 * /Character:
 *   get:
 *     summary: Obtiene todos los personajes.
 *     description: Obtiene una lista de todos los personajes.
 *     responses:
 *       200:
 *         description: Lista de personajes exitosamente obtenida.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Character'
 *   // Otras rutas comunes aquí (por ejemplo, POST, PUT, DELETE para Character, Film y Planet)
 */