const express = require('express');
const app = express();
const formidable = require('express-formidable');
const config = require('./config');
const Clientes = require('./controllers/clientes');
const Validacion = require('./controllers/validacion');

app.use(formidable());

/**
 * Funcionalidades de clientes.
 */
app.post('/clientes/add', async (req, res) => {
    let cliente = new Clientes({
        documento: req.fields.documento,
        nombre: req.fields.nombre,
        apellido: req.fields.apellido
    });
    res.send(await cliente.add());
});
app.post('/clientes/getall', Validacion.login, async (req, res) => {
    res.send(await Clientes.getAll());
});
app.put('/clientes/update', async (req, res) => {
    let cliente = new Clientes({
        id: req.fields.id,
        documento: req.fields.documento,
        nombre: req.fields.nombre,
        apellido: req.fields.apellido
    });
    res.send(await cliente.update());
});
app.delete('/clientes/delete', async (req, res) => {
    res.send(await Clientes.delete(req.fields.id));
});
app.listen(config.port, () => {
    console.log(`Server running on port ${config.port}...`);
});