const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');
const { handleContactForm } = require('../controllers/contactController');

const readJSON = (filename) => {
  return JSON.parse(fs.readFileSync(path.join(__dirname, '../data', filename)));
};

router.get('/slides', (req, res) => res.json(readJSON('slides.json')));
router.get('/features', (req, res) => res.json(readJSON('features.json')));
router.get('/pricing', (req, res) => res.json(readJSON('pricing.json')));
router.post('/contact', handleContactForm);

module.exports = router;
