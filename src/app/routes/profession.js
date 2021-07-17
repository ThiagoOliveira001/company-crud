import { Router } from 'express';

import profession_controller from '../controllers/Profession';

const routes = new Router();

/**
 * @openapi
 * /profession:
 *   get:
 *     tags:
 *       - Profession
 *     summary: Lista as profissões cadastradas no sistema
 *     responses:
 *       200:
 *         description: Retorna lista com as profissões
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   name:
 *                     type: string
 */
routes.get('/', profession_controller.list);

export default routes;
