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

/**
 * @openapi
 * /company:
 *   get:
 *     tags:
 *       - Company
 *     summary: Lista páginada de empresas
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
 *         description: Retorna uma lista de empresas com numero de páginas e total
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 pages:
 *                   type: integer
 *                 total:
 *                   type: integer
 *                 companies:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                       name:
 *                         type: string
 *                       city:
 *                         type: string
 *       401:
 *         $ref: '#/components/schemas/Http401'
 */
routes.get('/', CompanyController.list);

/**
 * @openapi
 * /company/{id}:
 *   put:
 *     tags:
 *       - Company
 *     summary: Atualiza os dados da empresa
 *     parameters:
 *       - name: id
 *         in: integer
 *         required: true
 *         schema:
 *           type: integer
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
 *       200:
 *         description: Retorna uma mensagem de sucesso
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
routes.put('/:id', companyValidator, CompanyController.update);

/**
 * @openapi
 * /company/{id}:
 *   get:
 *     tags:
 *       - Company
 *     summary: Busca dados da empresa
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Retorna os dados da empresa
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
 *       401:
 *         $ref: '#/components/schemas/Http401'
 */
routes.get('/:id', CompanyController.listById);

/**
 * @openapi
 * /company/{id}:
 *   delete:
 *     tags:
 *       - Company
 *     summary: Deleta uma empresa
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Retorna mensagem de sucesso
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
routes.delete('/:id', CompanyController.remove);

export default routes;
