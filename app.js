const express = require('express');

const app = express();

app.use('/', function(req, res) {
    res.send('Hola Mundo');
});

app.listen(3000);
console.log('La app esta corriendo en http://localhost:3000');