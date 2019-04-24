const express = require('express');
const formidable = require('express-formidable');
const app = express();

app.use(formidable());

app.get('/:nombre/:apellido', (req, res) => {
    // res.send({
    //     status: true,
    //     nombre: 'Hola ' + req.query.nombre + ' - ' + req.query.apellido
    // });
    res.send({
        status: true,
        nombre: req.params.nombre,
        apellido: req.params.apellido
    });
});

app.post('/edad', (req, res) => {
    res.send({
        nombre: 'el nombre ' + req.fields.nombre
    });
});



app.listen(3000, () => {
    console.log('Server running on port 3000...');
});