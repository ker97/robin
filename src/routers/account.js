const express = require('express');
const router = new express.Router();
const Account = require('../models/account.js');

router.post('/account', async (req, res) => {
  const account = new Account(req.body);
  try {
    await account.save();
    res.status(201).send(account);
  } catch (e) {
    res.status(400).send(e); 
  };
});

router.get('/account/:id', async (req, res) => {
  try {
    const account = await Account.findById(req.params.id); 
    if (!account) throw new Error();
    res.send(account); 
  } catch (e) {
    res.status(404).send({error: 'Account not found'});
  };
});

router.delete('/account/:id', async (req, res) => {
  try {
    const account = await Account.findByIdAndDelete(req.params.id); 
    if (!account) throw new Error();
    res.send(account); 
  } catch (e) {
    res.status(404).send({error: 'Account not found'});
  };
});

module.exports = router;
