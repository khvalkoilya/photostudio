const Sequelize = require('sequelize');
const db = require('../config/database');

const PricesStudios = db.define('prices_studios', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  price: {
    type: Sequelize.INTEGER,
  },
}, {
  timestamps: false,
});

module.exports = PricesStudios;
