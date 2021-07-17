import { Router } from 'express';

import EmployeeController from '../controllers/Employee';
import { employeeValidator } from '../validators';

const routes = new Router();

/**
 * @openapi
 * /employee:
 *   post:
 *     tags:
 *       - Employee
 *     summary: Cadastra um funcionário
 *     requestBody:
 *       description: Dados do funcionário
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               profession_id:
 *                 type: integer
 *               company_id:
 *                 type: integer
 *               salary:
 *                 type: number
 *     responses:
 *       201:
 *         description: Retorna os dados do funcionário cadastrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 name:
 *                   type: string
 *                 profession_id:
 *                   type: integer
 *                 company_id:
 *                   type: integer
 *                 salary:
 *                   type: number
 *                 created_at:
 *                   type: string
 *                 updated_at:
 *                   type: string
 *       400:
 *         $ref: '#/components/schemas/Http400'
 *       401:
 *         $ref: '#/components/schemas/Http401'
 */
routes.post('/', employeeValidator, EmployeeController.create);

export default routes;
