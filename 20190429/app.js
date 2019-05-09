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
app.post('/clientes/getall', Validacion.login, async (req, res) => {
    let clientes = new Clientes({
        nombre: 'Juan',
        apellido: 'Perez',
        documento: '1234'
    });
    res.send(await clientes.getAll());
});
app.post('/clientes/add', (req, res) => {
    res.send('Add clientes');
});
app.put('/clientes/update', (req, res) => {
    res.send('Update clientes');
});
app.delete('/clientes/delete', (req, res) => {
    res.send('Delete clientes');
});
app.listen(config.port, () => {
    console.log(`Server running on port ${config.port}...`);
});