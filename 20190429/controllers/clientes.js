const Model = require('../models/clientesModel');
const Util = require('../helpers/util');
const Mysql = require('../helpers/mysql');

class Clientes extends Model {

    constructor(args) {
        super(args);
    }

    async getAll() {
        try {
            //throw new Error('Error en cliente!!!');
            let mysql = new Mysql();
            let result = await mysql.select('SELECT * FROM CUSTOMERS');
            return result;
        } catch (error) {
            //fs.writeFileSync('logs/logError.txt', error);
            Util.writeLogError(error);
            return {
                status: false,
                message: error
            };
        }
    }
}

module.exports = Clientes;