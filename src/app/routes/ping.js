import { Router } from 'express';

const routes = new Router();

/**
 * @openapi
 * /:
 *   get:
 *    tags:
 *      - Ping
 *    summary: Rota para verificar se a API está ativa
 *    consumes:
 *      - application/json
 *    responses:
 *      200:
 *        description: Retorna a data e ambiente da API
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                env:
 *                  type: string
 *                date:
 *                  type: string
 */
routes.get('/', (req, res) => {
  res.status(200).json({
    date: new Date(),
    env: process.env.NODE_ENV,
  });
});

export default routes;
