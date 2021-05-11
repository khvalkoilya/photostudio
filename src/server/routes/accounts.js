/* eslint-disable no-param-reassign */
const express = require('express');
const Accounts = require('../models/accounts');
const Roles = require('../models/roles');

const router = express.Router();

function getRole(element) {
  return Roles.findByPk(element.role_id);
}

router.get('/', async (req, res) => {
  const accounts = await Accounts.findAll();
  const promises = accounts.map((element) => (async () => {
    const { type } = await getRole(element);
    element.dataValues = {
      ...element.dataValues,
      type,
    };
  })());
  await Promise.all(promises);

  res.json(accounts);
});

router.post('/', (req, res) => {
  console.log(req.body);
  // console.log(res)
  // const accounts = await Accounts.findAll();
  // const promises = accounts.map((element) => (async () => {
  //   const { type } = await getRole(element);
  //   element.dataValues = {
  //     ...element.dataValues,
  //     type,
  //   };
  // })());
  // await Promise.all(promises);

// res.json(accounts);
});

module.exports = router;
