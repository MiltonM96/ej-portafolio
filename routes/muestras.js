var express = require('express');
var router = express.Router();

/* GET seccion(muestras.ejs). */
router.get('/', function(req, res, next) {
    res.render('muestras', { title: 'Nuestras muestras' });
});

module.exports = router;