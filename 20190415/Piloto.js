const Persona = require('./Persona');

class Piloto extends Persona {
    constructor(...args) {
        super(args[0], args[1], args[2]);
        this.rango = args[3];
        this.nombre = 'Nuevo Nombre!!!!!!'
    }

    set rango(value) {
        this.rangoValue = value;
    }
    get rango() {
        return this.rangoValue;
    }

    volar() {
        console.log('El piloto', this.nombre, 'de rango', this.rango, 'está volando!!');
    }

}

module.exports = Piloto;