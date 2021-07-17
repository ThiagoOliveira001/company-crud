require('./bootstrap');

const config = {
  dialect: process.env.DB_DIALECT,
  dialectOptions: {
    connectTimeout: 60000,
    options: {
      requestTimeout: 600000,
      encrypt: false,
      validateBulkLoadParameters: false,
    },
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  define: {
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    underscoredAll: true,
  },
  logging: false,
  logQueryParameters: false,
  seederStorage: 'sequelize',
};

module.exports = config;
