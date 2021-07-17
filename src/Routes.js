import { Router } from 'express';
import swaggerUI from 'swagger-ui-express';

import * as specs from './config/swagger';

import {
  ping_route,
  profession_route,
  zipcode_route,
  company_route,
} from './app/routes';

const routes = new Router();

routes.use('/documentation', swaggerUI.serve, swaggerUI.setup(specs.default));

routes.use(ping_route);

routes.use('/profession', profession_route);

routes.use('/zipcode', zipcode_route);

routes.use('/company', company_route);

export default routes;
