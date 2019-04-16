/**
 * Se realiza importación de la clase.
 */
// const Persona = require('./Persona');

/**
 * Se declara una nueva instancia de la clase (se crea un objeto).
 */
// let persona = new Persona('Jorge', 'Vargas', 30);

// console.log(persona.nombre, persona.apellido, persona.edad);

// const Persona = require('./Persona');
// let persona = new Persona('Jorge', 'Vargas', 30);
// persona.correr();

/**
 * Metodos estáticos
 */
// const Persona = require('./Persona');
// Persona.comer();

/**
 * Herancia - clase abstracta.
 */
const Piloto = require('./Piloto');
let piloto = new Piloto('Jose', 'Garcia', 35, 'Primer Oficial');
piloto.correr();