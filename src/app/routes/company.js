import { Router } from 'express';

import CompanyController from '../controllers/Company';
import { companyValidator } from '../validators';

const routes = new Router();

/**
 * @openapi
 * /company:
 *   post:
 *     tags:
 *       - Company
 *     summary: Cadastra uma empresa no sistema
 *     requestBody:
 *       description: Dados da empresa
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 required: true
 *               address:
 *                 type: string
 *                 required: true
 *                 description: logradouro
 *               zipcode:
 *                 type: string
 *                 required: true
 *                 description: CEP
 *               neighborhood:
 *                 type: string
 *                 required: true
 *                 description: bairro
 *               number:
 *                 type: string
 *                 required: true
 *                 description: numero do estabelecimento
 *               complement:
 *                 type: string
 *                 required: true
 *                 description: complemento do endereço
 *               city:
 *                 type: string
 *                 required: true
 *                 descripiton: cidade
 *               uf:
 *                 type: string
 *                 required: true
 *               phone:
 *                 type: string
 *                 required: true
 *                 description: telefone ou celular
 *     responses:
 *       201:
 *         description: retorna os dados do cadastro
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 name:
 *                   type: string
 *                 address:
 *                   type: string
 *                 zipcode:
 *                   type: string
 *                 neighborhood:
 *                   type: string
 *                 number:
 *                   type: string
 *                 complement:
 *                   type: string
 *                 city:
 *                   type: string
 *                 uf:
 *                   type: string
 *                 phone:
 *                   type: string
 *                 created_at:
 *                   type: string
 *                 updated_at:
 *                   type: string
 *       400:
 *         $ref: '#/components/schemas/Http400'
 *       401:
 *         $ref: '#/components/schemas/Http401'
 */
routes.post('/', companyValidator, CompanyController.create);

export default routes;
