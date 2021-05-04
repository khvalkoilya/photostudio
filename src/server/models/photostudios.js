const Sequelize = require('sequelize');
const db = require('../config/database');

const Photostudios = db.define('photostudios', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: Sequelize.STRING,
  },
  description: {
    type: Sequelize.STRING,
  },
  price_id: {
    type: Sequelize.INTEGER,
  },
  album_id: {
    type: Sequelize.INTEGER,
  },
  address_id: {
    type: Sequelize.INTEGER,
  },
  telephone: {
    type: Sequelize.STRING,
  },
  instagram_id: {
    type: Sequelize.INTEGER,
  },
}, {
  timestamps: false,
});

module.exports = Photostudios;
