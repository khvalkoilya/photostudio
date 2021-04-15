const express = require('express');
const Photostudios = require('../models/photostudios');

const router = express.Router();

router.get('/', (req, res) => {
  Photostudios.findAll()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => console.log(err));
});

module.exports = router;
