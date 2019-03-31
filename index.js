const express = require('express');
const app = express();

app.listen(8080, function(){
	console.log("Servdor listo");
});

app.get('/', function(req, res){
	console.log("Conectad al index");
	res.send("Servidor ITSA IRI 8A Listo");
});