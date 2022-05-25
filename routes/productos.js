var express = require('express');
var router = express.Router();
var db = require('../conexion/conexion');

/* GET seccion(productos.ejs). */
router.get('/', function(req, res, next) {
    alert("milton");
    db.query("SELECT * FROM `tblproductos`", function(err,resultados){
        
        console.log(resultados);
        res.render('productos', { title: 'Nuestros productos',Autos: resultados });
    });
    
    
});

module.exports = router;