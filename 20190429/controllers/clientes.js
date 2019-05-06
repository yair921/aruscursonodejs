const Model = require('../models/clientesModel');
const Util = require('../helpers/util');

class Clientes extends Model {

    constructor(args) {
        super(args);
    }

    getAll() {
        try {
            throw new Error('Error en cliente!!!');
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
            //fs.writeFileSync('logs/logError.txt', error);
            Util.writeLogError(error);
        }
    }
}

module.exports = Clientes;