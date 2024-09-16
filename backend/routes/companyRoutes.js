const express = require('express');
const router = express.Router();
const Company = require('../models/Company');

// Register company
router.post('/register', async (req, res) => {
  const company = new Company(req.body);
  try {
    await company.save();
    res.send(company);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Get all companies
router.get('/', async (req, res) => {
  try {
    const companies = await Company.find();
    res.send(companies);
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;