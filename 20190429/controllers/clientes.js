const fs = require('fs');
const Model = require('../models/clientesModel');

class Clientes extends Model {

    constructor(args) {
        super(args);
    }

    getAll() {
        try {
            fs.writeFile('path/test.txt', 'aaa', function (err) { 
                
            });
            return [
                {
                    nombre: this.nombre,
                    apellido: this.apellido,
                    documento: this.documento
                },
                {
                    nombre: this.nombre + '_2',
                    apellido: this.apellido + '_2',
                    documento: this.documento + '_2'
                }
            ];
        } catch (error) {
            fs.writeFileSync('../logError', error);
        }
    }
}

module.exports = Clientes;