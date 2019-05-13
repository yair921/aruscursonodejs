const Model = require('../models/clientesModel');
const Util = require('../helpers/util');
const Mysql = require('../helpers/mysql');

class Clientes extends Model {

    constructor(args) {
        super(args);
    }

    static async getAll() {
        try {
            //throw new Error('Error en cliente!!!');
            let mysql = new Mysql();
            let result = await mysql.executeQuery('SELECT * FROM CUSTOMERS');
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

    async add() {
        try {
            let mysql = new Mysql();
            let result =
                await mysql.executeQuery(`
                    INSERT INTO customers 
                    (document,first_name,last_name)
                    values
                    ('${this.documento}','${this.nombre}','${this.apellido}')
            `);
            return result;
        } catch (error) {
            Util.writeLogError(error);
            return {
                status: false,
                message: error
            };
        }
    }

    async update(){
        try {
            let mysql = new Mysql();
            // let result =
            //     await mysql.executeQuery(`
            //         UPDATE customers SET
            //         document = '${this.documento}',
            //         first_name = '${this.nombre}',
            //         last_name = '${this.apellido}'
            //         WHERE id = ${this.id}
            // `);
            let result =
                await mysql.executeQuery(`
                    UPDATE customers SET
                    first_name = '${this.nombre}'
                    WHERE id = ${this.id}
            `);
            return result;
        } catch (error) {
            Util.writeLogError(error);
            return {
                status: false,
                message: error
            };
        }
    }
}

module.exports = Clientes;