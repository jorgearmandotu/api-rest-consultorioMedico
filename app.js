const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const citaRoute = require('./routes/cita');

app.use(bodyParser.json());

app.use('/citas', citaRoute);

app.get('/', (req, res) => {
    res.send('prueba 1 respuesta del servidor');
});

mongoose.connect('mongodb+srv://armandou:testSENA2022@consultoriomedico.18okn.mongodb.net/?retryWrites=true&w=majority',
{useNewUrlParser: true}, () =>{
    console.log('si hay conexión a la BD');
});

app.listen(10000);
