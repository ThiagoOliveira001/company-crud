import { Router } from 'express';

import ZipcodeController from '../controllers/Zipcode';

const routes = new Router();

/**
 * @openapi
 * /zipcode/{zipcode}:
 *   get:
 *     tags:
 *       - Zipcode
 *     summary: Busca endereço pelo CEP
 *     parameters:
 *       - name: zipcode
 *         in: zipcode
 *         required: true
 *         schema:
 *           type: string
 *         description: CEP
 *     responses:
 *       200:
 *         description: Retorna o endereço
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *       404:
 *         description: Endereço não encontrado para o CEP
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *       401:
 *         $ref: '#/components/schemas/Http401'
 */
routes.get('/:zipcode', ZipcodeController.find);

export default routes;
