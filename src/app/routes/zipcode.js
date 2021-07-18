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
 *         in: path
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
 *               properties:
 *                 address:
 *                   type: string
 *                   description: Logradouro
 *                 neighborhood:
 *                   type: string
 *                   description: Bairro
 *                 city:
 *                   type: string
 *                   description: cidade
 *                 uf:
 *                   type: string
 *                   description: Unidade da federação
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
