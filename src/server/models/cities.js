const Sequelize = require('sequelize');
const db = require('../config/database');

const Cities = db.define('cities', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  city: {
    type: Sequelize.STRING,
  },
}, {
  timestamps: false,
});

module.exports = Cities;
