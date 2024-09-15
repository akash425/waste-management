const express = require('express');
const router = express.Router();
const Farmer = require('../models/Farmer');

// Register farmer
router.post('/register', async (req, res) => {
  const farmer = new Farmer(req.body);
  try {
    await farmer.save();
    res.send(farmer);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Get all farmers
router.get('/', async (req, res) => {
  try {
    const farmers = await Farmer.find();
    res.send(farmers);
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;