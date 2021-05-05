const Sequelize = require('sequelize');
const db = require('../config/database');

const Addresses = db.define('addresses', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  street: {
    type: Sequelize.STRING,
  },
  house: {
    type: Sequelize.INTEGER,
  },
  coordinates: {
    type: Sequelize.STRING,
  },
  city_id: {
    type: Sequelize.STRING,
  },
}, {
  timestamps: false,
});

module.exports = Addresses;
