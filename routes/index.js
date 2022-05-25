var express = require('express');
var router = express.Router();

/* GET home page(index.ejs). */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'MercadoAutos' });
});

module.exports = router;
