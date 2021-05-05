const Sequelize = require('sequelize');
const db = require('../config/database');

const Roles = db.define('roles', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  type: {
    type: Sequelize.STRING,
  },
}, {
  timestamps: false,
});

module.exports = Roles;
