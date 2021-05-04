/* eslint-disable no-param-reassign */
const express = require('express');
const Photostudios = require('../models/photostudios');
const PricesStudios = require('../models/pricesStudios');

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

router.get('/', async (req, res) => {
  const data = await Photostudios.findAll();
  const mas = data.map((element) => (async () => {
    const { price } = await PricesStudios.findByPk(element.price_id);
    element.dataValues.price = price;
  })());
  await Promise.all(mas);

  res.json(data);
});

module.exports = router;
