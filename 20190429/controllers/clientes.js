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
            //let mysql = new Mysql();
            let result = await Mysql.executeQuery('SELECT * FROM CUSTOMERS WHERE enabled=1');
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
            let result =
                await Mysql.executeQuery(`
                    INSERT INTO customers 
                    (document,first_name,last_name)
                    values
                    ('${this.documento}','${this.nombre}','${this.apellido}')
            `);
            if (!result.status) {
                return {
                    status: false,
                    message: 'No se ha podido agregar el cliente.'
                }
            }
            return {
                status: true,
                message: 'Se ha agrgado el cliente de forma exitosa.'
            };
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
            //let mysql = new Mysql();
            let cliente =
                await Mysql.executeQuery(`
            SELECT * FROM customers WHERE id = ${this.id}
            `);
            if (cliente.objResponse.length === 0) {
                return {
                    status: false,
                    message: 'No existe el cliente en la base de datos.'
                };
            }
            this.documento = Util.isNullOrEmpty(this.documento) ?
                cliente.objResponse[0].document : this.documento;
            this.nombre = Util.isNullOrEmpty(this.nombre) ?
                cliente.objResponse[0].first_name : this.nombre;
            this.apellido = Util.isNullOrEmpty(this.apellido) ?
                cliente.objResponse[0].last_name : this.apellido;
            let result =
                await Mysql.executeQuery(`
                    UPDATE customers SET
                    document = '${this.documento}',
                    first_name = '${this.nombre}',
                    last_name = '${this.apellido}' 
                    WHERE id = ${this.id}
            `);
            //mysql.endConnection();
            if (!result.status) {
                return {
                    status: false,
                    message: 'No se ha podido actualizar el cliente.'
                };
            }
            return {
                status: true,
                message: 'El cliente se ha actualizado de forma exitosa.'
            };
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
            let result = await Mysql.executeQuery(`DELETE FROM customers WHERE id=${id}`);
            if (!result.status) {
                return {
                    status: false,
                    message: 'No se ha podido eliminar el cliente!'
                };
            } else if (result.objResponse.affectedRows === 0) {
                return {
                    status: false,
                    message: 'No se ha podido eliminar el cliente!'
                };
            }
            return {
                status:true,
                message:'El cliente se eliminó de forma exitosa.'
            };
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