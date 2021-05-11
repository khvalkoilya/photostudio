const Sequelize = require('sequelize');
const db = require('../config/database');

const PhotosStudios = db.define('photos_studios', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  link: {
    type: Sequelize.STRING,
  },
  album_id: {
    type: Sequelize.INTEGER,
  },
}, {
  timestamps: false,
});

module.exports = PhotosStudios;
