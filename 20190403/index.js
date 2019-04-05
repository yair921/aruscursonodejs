/*
 *  DECLARACIÓN
 */

// let obj = {
//     nombre:'Juan',
//     obj2:{
//         edad:12,
//         obj3:{
//             clase:'node'
//         }
//     }
// };
// console.log(obj.obj2.obj3.clase);

/*
 *  DESTRUCTURING
 */
// let obj = {
//     nombre: "Juan",
//     apellido: "Perez",
//     edad: 34,
//     curso: {
//         nombre: 'NodeJs',
//         duracion: '3h'
//     }
// };
// let { apellido, edad, nombre } = obj;
// //let { nombre } = obj.curso;
// console.log(edad);

/*
 * FILTRAR JSON
 */
// let obj = [
//     { nombre: "Yair", apellido: "Leon", edad: 33 },
//     { nombre: "Juan", apellido: "Perez", edad: 33 },
//     { nombre: "Ricardo", apellido: "Finol", edad: 33 },
//     { nombre: "David", apellido: "Perez", edad: 34 }
// ];
// let result = obj.filter(item => {
//     return (item.edad === 33);
// });
// console.log(result);

/*
 * Object.Keys()
 */
// let obj = { nombre: "Yair", apellido: "Leon", edad: 33 };
// let llaves = Object.keys(obj);
// for (i in llaves) {
//     console.log(llaves[i], ':', obj[llaves[i]]);
// }
//console.log(llaves);

/*
 * Agregar atributo a JSON 
 */
// let obj = { nombre: "Yair", apellido: "Leon", edad: 33 };
// obj.edoCivil = 'Casado';
// obj.edad = "32";
// console.log(obj);

/*
 * Borrar atributo a JSON 
 */
// let obj = { nombre: "Yair", apellido: "Leon", edad: 33 };
// delete obj.edad;
// console.log(obj);

/*
 * FILTRAR JSON con include.
 */
// let obj = [
//     { nombre: "Yair", apellido: "Leon", edad: 33 },
//     { nombre: "Juan", apellido: "Perez", edad: 33 },
//     { nombre: "Ricardo", apellido: "Finol", edad: 33 },
//     { nombre: "David", apellido: "Perez", edad: 34 }
// ];
// let result = obj.filter(item => {
//     return (item.apellido.includes('e'));
// });
// console.log(result);

/*
 * Ejercicio práctico n1.
 */
// function filtrar(texto) {
//     try {
//         let obj = [
//             { nombre: "Yair", apellido: "Leon", edad: 33 },
//             { nombre: "Juan", apellido: "Perez", edad: 33 },
//             { nombre: "Ricardo", apellido: "Finol", edad: 33 },
//             { nombre: "David", apellido: "Perez", edad: 34 }
//         ];
//         let result = obj.filter(item => {
//             return (item.apellido.includes(texto)
//                 || item.nombre.includes(texto));
//         });
//         console.log(result);
//     } catch (error) {
//         console.log(error);
//     }
// }
// filtrar('Y');


/*
 * Ejercicio práctico n2.
 */
function filtrar(att, valor) {
    try {
        let obj = [
            { nombre: "Yair", apellido: "Leon", edad: 33 },
            { nombre: "Juan", apellido: "Perez", edad: 33 },
            { nombre: "Ricardo", apellido: "Finol", edad: 33 },
            { nombre: "David", apellido: "Perez", edad: 34 }
        ];
        let result = obj.filter(item => {
            return (item[att].includes(valor));
        });
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}
filtrar('apellido', 'z');