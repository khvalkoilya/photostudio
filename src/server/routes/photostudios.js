/* eslint-disable no-param-reassign */
const express = require('express');
const Photostudios = require('../models/photostudios');
const PricesStudios = require('../models/pricesStudios');
const Addresses = require('../models/addresses');
const Cities = require('../models/cities');

const router = express.Router();

// PricesStudios.hasMany(Photostudios);

// router.get('/', (req, res) => {
//   Photostudios.findAll()
//     .then((data) => {
//       PricesStudios.findByPk(data[0].price_id)
//         .then((prices) => {
//           data = {
//             ...data,
//             price: prices[0].price,
//           };
//         })
//         .then(() => {
//           res.json(data);
//         });
//     })
//     .catch((err) => console.log(err));
// });
// router.get('/', (req, res) => {
//   Photostudios.findAll()
//     .then((data) => {
//       const a = data[0].price_id;
//       console.log(a);
//       res.json(a);
//     })
//     .catch((err) => console.log(err));
// });

function getPrice(element) {
  return PricesStudios.findByPk(element.price_id);
}

async function getAddress(element) {
  const obj = await Addresses.findByPk(element.price_id);
  const { city } = await Cities.findByPk(obj.city_id);
  const address = {
    ...obj.dataValues,
    city,
  };
  return address;
}

router.get('/', async (req, res) => {
  const data = await Photostudios.findAll();
  const promises = data.map((element) => (async () => {
    const { price } = await getPrice(element);
    element.dataValues.price = price;
    const address = await getAddress(element);
    element.dataValues = {
      ...element.dataValues,
      price,
      ...address,
    };
  })());
  await Promise.all(promises);

  res.json(data);
});

module.exports = router;
