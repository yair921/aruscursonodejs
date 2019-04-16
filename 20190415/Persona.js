class Persona {

    constructor(...args) {
        this.nombre = args[0];
        this.apellido = args[1];
        this.edad = args[2];
    }

    set nombre(value) {
        this.nombreValue = value;
    }
    get nombre() {
        return this.nombreValue;
    }
    set apellido(value) {
        this.apellidoValue = value;
    }
    get apellido() {
        return this.apellidoValue;
    }
    set edad(value) {
        this.edadValue = value;
    }
    get edad() {
        return this.edadValue;
    }

    correr() {
        console.log('La persona', this.nombre, 'está corriendo!!');
    }
    static comer() {
        console.log('Alguien está COMIENDO!!');
    }
}

module.exports = Persona;