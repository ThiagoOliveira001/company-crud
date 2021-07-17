import Sequelize, { Model } from 'sequelize';

class Profession extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: Sequelize.SMALLINT,
          primaryKey: true,
        },
        name: Sequelize.STRING,
      },
      {
        sequelize,
        timestamps: false,
        tableName: 'profession',
      }
    );

    return this;
  }
}

export default Profession;
