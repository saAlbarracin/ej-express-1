const express = require('express');
const app = express();
 
app.get('/', function(req, res) {
  console.log('Info que me llega', req);
  res.send('Hola Mundo')
})
 
app.listen(3074, function() {
    console.log("Listo el servidor, con puerto 3074...");
});