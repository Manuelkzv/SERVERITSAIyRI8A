const express = require('express');
const app = express();

app.use(express.static("Public"));


app.listen(8080, function(){
	console.log("Servdor listo");
});

app.get('/', function(req, res){
	console.log("Conectad al index");
	res.send("Servidor ITSA IRI 8A Listo");
});

app.get('/patito', function(req, res){
	console.log("Conectad al patito");
  //res.send("Patito listo");
	res.sendFile(__dirname + "/Public/index.html");
});

app.get('/Prueba/:algunDato', function(req, res){
	console.log("Conectad al patito");
  res.send("Dato leido: " + req.params.algunDato);

});
