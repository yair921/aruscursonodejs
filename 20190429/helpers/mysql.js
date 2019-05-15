const mysql = require('mysql');
const Util = require('./util');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'test.123',
    database: 'online_store'
});

class Mysql {
    constructor() {
    }
    
    static executeQuery(query) {
        return new Promise((resolve, reject) => {
            try {
                //connection.connect();
                connection.query(query, (error, results, fields) => {
                    if (error) {
                        resolve({
                            status: false,
                            message: error
                        });
                        return;
                    }
                    resolve({
                        status: true,
                        objResponse: results
                    });
                });
                //connection.end();
            } catch (error) {
                Util.writeLogError(error);
                reject(error);
            }
        });
    }
}

module.exports = Mysql;