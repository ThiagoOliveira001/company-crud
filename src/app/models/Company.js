import Sequelize, { Model } from 'sequelize';

class Company extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        name: Sequelize.STRING,
        address: Sequelize.STRING,
        zipcode: Sequelize.STRING,
        neighborhood: Sequelize.STRING,
        number: Sequelize.STRING,
        complement: Sequelize.STRING,
        city: Sequelize.STRING,
        uf: Sequelize.STRING,
        phone: Sequelize.STRING,
        created_at: Sequelize.DATE,
        updated_at: Sequelize.DATE,
      },
      {
        sequelize,
        tableName: 'company',
        createdAt: 'created_at',
        updatedAt: 'updated_at',
      }
    );

    return this;
  }
}

export default Company;
