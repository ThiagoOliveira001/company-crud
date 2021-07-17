import Sequelize, { Model } from 'sequelize';

class Employee extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        name: Sequelize.STRING,
        profession_id: Sequelize.SMALLINT,
        company_id: Sequelize.INTEGER,
        salary: Sequelize.DECIMAL,
        created_at: Sequelize.DATE,
        updated_at: Sequelize.DATE,
      },
      {
        sequelize,
        tableName: 'employee',
        createdAt: 'created_at',
        updatedAt: 'updated_at',
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Company, {
      foreignKey: 'company_id',
    });
    this.belongsTo(models.Profession, {
      foreignKey: 'profession_id',
    });
  }
}

export default Employee;
