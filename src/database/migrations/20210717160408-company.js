module.exports = {
  up: async (queryInterface, Sequelize) =>
    queryInterface.createTable('company', {
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
      address: {
        type: Sequelize.DataTypes.STRING(150),
        allowNull: false,
      },
      zipcode: {
        type: Sequelize.DataTypes.STRING(10),
        allowNull: false,
      },
      neighborhood: {
        type: Sequelize.DataTypes.STRING(100),
        allowNull: false,
      },
      number: {
        type: Sequelize.DataTypes.STRING(20),
        allowNull: false,
      },
      complement: {
        type: Sequelize.DataTypes.STRING(50),
        allowNull: false,
      },
      city: {
        type: Sequelize.DataTypes.STRING(50),
        allowNull: false,
      },
      uf: {
        type: Sequelize.DataTypes.STRING(2),
        allowNull: false,
      },
      phone: {
        type: Sequelize.DataTypes.STRING(11),
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

  down: async (queryInterface) => queryInterface.dropTable('company'),
};
