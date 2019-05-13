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
            let result = await mysql.executeQuery('SELECT * FROM CUSTOMERS WHERE enabled=1');
            mysql.endConnection();
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
            mysql.endConnection();
            return result;
        } catch (error) {
            Util.writeLogError(error);
            return {
                status: false,
                message: error
            };
        }
    }

    async update() {
        try {
            let mysql = new Mysql();
            let cliente =
                await mysql.executeQuery(`
            SELECT * FROM customers WHERE id = ${this.id}
            `);
            this.documento = Util.isNullOrEmpty(this.documento) ?
                cliente.objResponse[0].document : this.documento;
            this.nombre = Util.isNullOrEmpty(this.nombre) ?
                cliente.objResponse[0].first_name : this.nombre;
            this.apellido = Util.isNullOrEmpty(this.apellido) ?
                cliente.objResponse[0].last_name : this.apellido;
            let result =
                await mysql.executeQuery(`
                    UPDATE customers SET
                    document = '${this.documento}',
                    first_name = '${this.nombre}',
                    last_name = '${this.apellido}' 
                    WHERE id = ${this.id}
            `);
            mysql.endConnection();
            return result;
        } catch (error) {
            Util.writeLogError(error);
            return {
                status: false,
                message: error
            };
        }
    }

    static async delete(id) {
        try {
            let mysql = new Mysql();
            let result = await mysql.executeQuery(`DELETE FROM customers WHERE id=${id}`);
            mysql.endConnection();
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