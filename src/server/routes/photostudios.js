/* eslint-disable camelcase */
/* eslint-disable no-param-reassign */
const express = require('express');
const Photostudios = require('../models/photostudios');
const PricesStudios = require('../models/prices_studios');
const Addresses = require('../models/addresses');
const Cities = require('../models/cities');
const Instagrams = require('../models/instagrams');
const PhotosStudios = require('../models/photos_studios');

const router = express.Router();

function getAlbum(element, photos) {
  return photos.filter((photo) => photo.album_id === element.album_id).map((photo) => photo.link);
}

function getInstagram(element) {
  return Instagrams.findByPk(element.instagram_id);
}

function getPrice(element) {
  return PricesStudios.findByPk(element.price_id);
}

async function getAddress(element) {
  const address = await Addresses.findByPk(element.address_id);
  const { city } = await Cities.findByPk(address.city_id);
  const addressFull = {
    ...address.dataValues,
    city,
  };
  return addressFull;
}

router.get('/', async (req, res) => {
  const data = await Photostudios.findAll();
  const photos = await PhotosStudios.findAll();

  const promises = data.map((element) => (async () => {
    const { price } = await getPrice(element);
    const address = await getAddress(element);
    const { instagram_account } = await getInstagram(element);
    const album = await getAlbum(element, photos);

    element.dataValues = {
      ...element.dataValues,
      price,
      ...address,
      instagram_account,
      album,
    };
  })());

  await Promise.all(promises);

  res.json(data);
});

module.exports = router;
