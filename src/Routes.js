import { Router } from 'express';
import swaggerUI from 'swagger-ui-express';

import * as specs from './config/swagger';

import ping_route from './app/routes/ping';

const routes = new Router();

routes.use('/documentation', swaggerUI.serve, swaggerUI.setup(specs.default));

routes.use(ping_route);

export default routes;
