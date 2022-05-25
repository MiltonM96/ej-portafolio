var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'ventas'
});

connection.connect(
    (err)=>{
        if(!err){console.log("Connection establecida");}
        else{console.log("Connection fallida");}
    }


);

/*connection.query("SELECT * FROM `tblproductos`", function(err,resultados){
    console.log(resultados);
});

connection.end();*/

module.exports = connection;