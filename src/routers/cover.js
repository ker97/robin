const express = require('express');
const router = new express.Router();
const Cover = require('../models/cover.js');

router.post('/cover', async (req, res) => {
  const cover = new Cover(req.body);
  try {
    await cover.save();
    res.status(201).send(cover);
  } catch (e) {
    res.status(400).send(e); 
  };
});

router.get('/cover/:id', async (req, res) => {
  try {
    const cover = await Cover.findById(req.params.id); 
    if (!cover) throw new Error();
    res.send(cover); 
  } catch (e) {
    res.status(404).send({error: 'Cover not found'});
  };
});

router.delete('/cover/:id', async (req, res) => {
  try {
    const cover = await Cover.findByIdAndDelete(req.params.id); 
    if (!cover) throw new Error();
    res.send(cover); 
  } catch (e) {
    res.status(404).send({error: 'Cover not found'});
  };
});

module.exports = router;
