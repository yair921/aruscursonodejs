/*
    DECLARACIONES DE VARIABLES
*/
//var nombre = 'Yair';
//let nombre = 'Juan';
// console.log(nombre);

// try {
//     let nombre = 'Yair';
//     let edad = 27;
//     let inscrito = true;
//     let c = [];
//     if (1 != '1') {
//         console.log(nombre);
//     } else {
//         console.log('No es verdadero!');
//     }
// } catch (error) {
//     console.log(error);
// } finally {
//     console.log('Se ejecutó el código');
// }

// tipos de variables
// try {
//     let d = true;
//     let c = {};
//    console.log(typeof d);
// } catch (error) {
//     console.log(error);
// }

// try {
//     const g = 9;
//     g = 8;
//     console.log(g);
// } catch (error) {
//     console.log(error);
// }

// try {
//     const g = {
//         nombre:'Juan',
//         apellido:'Perez'
//     };
//     //delete g.nombre;
//     console.log(g);
// } catch (error) {
//     console.log(error);
// }

// 'use strict';
// edad = 18;
// console.log(edad);

/*
    FUNCIONES
*/
// function suma() {
//     try {
//         let suma = n1 + n2;
//         console.log(suma);
//     } catch (error) {
//         console.log(error);
//     }
// }

// suma();

// function suma() {
//     try {
//         console.log(arguments);
//         let suma = arguments['0'] + arguments['1'];
//         console.log(suma);
//     } catch (error) {
//         console.log(error);
//     }
// }
// suma(1,4);

// function suma(...parametros) {
//     try {
//         console.log(parametros);
//     } catch (error) {
//         console.log(error);
//     }
// }

// suma(1,4,7,'Hola');

/*
    ARRAYS
*/

// push (Agrega de último)
// unshift (Agrega de primero)
// pop (Elimina el último)
// shift (Elimina el primero)
// splice (Elimina un índice)
// Destructuring

// function lista(){
//     try {
//         let arr = [
//             'Yair',
//             23,
//             {
//                 nombre:'Juan',
//                 apellido:'Montes'
//             }
//         ];
//         //arr.push(76);
//         //arr.unshift(76);
//         //arr.pop();
//         //arr.shift();
//         arr.splice(0,2);
//         console.log(arr);
//     } catch (error) {
//         console.log(error)
//     }
// }

// lista();

// function lista(){
//     try {
//         let arr = [
//             'Yair',
//             23,
//             {
//                 nombre:'Juan',
//                 apellido:'Montes'
//             }
//         ];
//        let [p0,p1,p2] = arr;
//         console.log(p2);
//     } catch (error) {
//         console.log(error)
//     }
// }

// lista();

function lista() {
    try {
        let arr = [
            'Yair',
            23,
            {
                nombre: 'Juan',
                apellido: 'Montes'
            }
        ];

        arr.map((o)=> {
            if (o !== 'Yair') {
                console.log(o);
            }
        });

    } catch (error) {
        console.log(error)
    }
}

lista();