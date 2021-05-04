const express = require('express');
const Accounts = require('../models/accounts');

const router = express.Router();

router.get('/', (req, res) => {
  Accounts.findAll()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => console.log(err));
});

module.exports = router;
