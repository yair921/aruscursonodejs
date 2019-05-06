const fs = require('fs');

class Util {
    static writeLogError(err) {
        try {
            let f = new Date();
            let fecha = `${f.getFullYear()}-${f.getMonth() + 1}-${f.getDate()} ${f.getHours()}:${f.getMinutes()}:${f.getSeconds()}`;
            fs.writeFileSync('20190429/logs/logError.txt', `${fecha} ->` + err);
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = Util;