import { Router } from 'express';
import swaggerUI from 'swagger-ui-express';

import * as specs from './config/swagger';

import { ping_route, profession_route } from './app/routes';

const routes = new Router();

routes.use('/documentation', swaggerUI.serve, swaggerUI.setup(specs.default));

routes.use(ping_route);

routes.use('/profession', profession_route);

export default routes;
