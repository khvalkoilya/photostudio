const Sequelize = require('sequelize');

module.exports = new Sequelize('photostudio', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',
});
