const Sequelize = require('sequelize');
const db = require('../config/database');

const Accounts = db.define('accounts', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  login: {
    type: Sequelize.STRING,
  },
  password: {
    type: Sequelize.STRING,
  },
  role_id: {
    type: Sequelize.INTEGER,
  },
}, {
  timestamps: false,
});

module.exports = Accounts;
