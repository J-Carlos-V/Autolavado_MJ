const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index', { title: 'Autolavado MJ' });
});

router.get('/contact', (req, res) => {
  res.render('contact', { title: 'Contact Page' });
});
router.get('/servicios', (req, res) => {
  res.render('servicios', { title: 'servicios' });
});
router.get('/nosotros', (req, res) => {
  res.render('nosotros', { title: 'nosotros page' });
});

module.exports = router;
