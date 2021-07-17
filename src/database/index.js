import Sequelize from 'sequelize';

import database_config from '../config/databaseConfig';
import models from '../app/models';

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(database_config);

    models
      .map((model) => model.init(this.connection))
      .map(
        (model) => model.associate && model.associate(this.connection.models)
      );
  }
}

export default new Database();
