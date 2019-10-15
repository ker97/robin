const express = require('express');
const router = new express.Router();
const Studio = require('../models/studio.js');

router.post('/studio', async (req, res) => {
  const studio = new Studio(req.body);
  try {
    await studio.save();
    res.status(201).send(studio);
  } catch (e) {
    res.status(400).send(e); 
  };
});

router.get('/studio/:id', async (req, res) => {
  try {
    const studio = await Studio.findById(req.params.id); 
    if (!studio) throw new Error();
    res.send(studio); 
  } catch (e) {
    res.status(404).send({error: 'Studio not found'});
  };
});

router.delete('/studio/:id', async (req, res) => {
  try {
    const studio = await Studio.findByIdAndDelete(req.params.id); 
    if (!studio) throw new Error();
    res.send(studio); 
  } catch (e) {
    res.status(404).send({error: 'Account not found'});
  };
});

module.exports = router;
