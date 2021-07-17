module.exports = {
  up: async (queryInterface, Sequelize) =>
    queryInterface.createTable('profession', {
      id: {
        type: Sequelize.DataTypes.SMALLINT,
        primaryKey: true,
        allowNull: false,
      },
      name: {
        type: Sequelize.DataTypes.STRING(50),
        allowNull: false,
      },
    }),

  down: async (queryInterface) => queryInterface.dropTable('profession'),
};
