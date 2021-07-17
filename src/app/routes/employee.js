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

/**
 * @openapi
 * /employee/{id}:
 *   put:
 *     tags:
 *       - Employee
 *     summary: Atualiza os dados do funcionário
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       description: dados do funcionário
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
 *       200:
 *         description: Mensagem de atualização bem sucedida
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *       400:
 *         $ref: '#/components/schemas/Http400'
 *       401:
 *         $ref: '#/components/schemas/Http401'
 */
routes.put('/:id', employeeValidator, EmployeeController.update);

/**
 * @openapi
 * /employee:
 *   get:
 *     tags:
 *       - Employee
 *     summary: Lista empregados da empresa
 *     parameters:
 *       - name: page
 *         in: query
 *         schema:
 *           type: integer
 *       - name: quantity
 *         in: query
 *         schema:
 *           type: integer
 *       - name: name
 *         in: query
 *         description: Filtra por nome
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Retorna uma lista de funcionários com numero de páginas e total
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 pages:
 *                   type: integer
 *                 total:
 *                   type: integer
 *                 employees:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                       name:
 *                         type: string
 *                       profession_name:
 *                         type: string
 *       401:
 *         $ref: '#/components/schemas/Http401'
 */
routes.get('/', EmployeeController.listByCompany);

export default routes;
