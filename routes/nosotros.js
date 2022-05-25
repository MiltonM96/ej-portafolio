var express = require('express');
var router = express.Router();

/* GET seccion(nosotros.ejs). */
router.get('/', function(req, res, next) {
    res.render('nosotros', { title: 'Nosotros somos' });
});

module.exports = router;