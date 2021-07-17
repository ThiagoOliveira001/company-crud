module.exports = {
  up: async (queryInterface, Sequelize) =>
    queryInterface.createTable('employee', {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      name: {
        type: Sequelize.DataTypes.STRING(200),
        allowNull: false,
      },
      profession_id: {
        type: Sequelize.DataTypes.SMALLINT,
        allowNull: false,
        references: {
          model: 'profession',
          key: 'id',
        },
      },
      company_id: {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: 'company',
          key: 'id',
        },
        allowNull: false,
      },
      salary: {
        type: Sequelize.DataTypes.DECIMAL(8, 2),
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DataTypes.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DataTypes.DATE,
        allowNull: false,
      },
    }),

  down: async (queryInterface) => queryInterface.dropTable('employee'),
};
