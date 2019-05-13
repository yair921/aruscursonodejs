class ClientesModel {
    constructor(args) {
        this.id = args.id || null;
        this.nombre = args.nombre;
        this.apellido = args.apellido;
        this.documento = args.documento;
    }
    set id(value) {
        this.idValue = value;
    }
    get id() {
        return this.idValue;
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
    set documento(value) {
        this.documentoValue = value;
    }
    get documento() {
        return this.documentoValue;
    }
}

module.exports = ClientesModel;