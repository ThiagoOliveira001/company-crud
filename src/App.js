import './config/bootstrap';
import './database';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import 'express-async-errors';
import routes from './Routes';
import exceptionHandler from './config/exceptionHandler';
import { httpResponse } from './app/middlewares';

class App {
  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
    this.exceptionHandler();
  }

  middlewares() {
    this.server.use(express.urlencoded({ extended: true }));
    this.server.use(express.json({ limit: '50mb' }));
    this.server.use(helmet());
    this.server.use(cors());
    this.server.use(httpResponse);
  }

  routes() {
    this.server.use(process.env.BASE_PATH, routes);
  }

  exceptionHandler() {
    this.server.use(exceptionHandler);
  }
}

export default new App().server;
