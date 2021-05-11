const Sequelize = require('sequelize');
const db = require('../config/database');

const Instagrams = db.define('instagrams', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  instagram_account: {
    type: Sequelize.STRING,
  },
}, {
  timestamps: false,
});

module.exports = Instagrams;
