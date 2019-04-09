/*
* Objeto Map.
*/
// let obj = new Map();
// obj.set('Nombre', 'Juan');
// obj.set('apellido', 'Perez');
// console.log(obj);
// obj.delete('apellido');
// console.log(obj);

/*
* for
*/
// function Bucle() {
//     try {
//         let arr = new Object(['Node', 'Java', '.net']);
//         for (let i = 0; i < arr.length; i++) {
//             console.log(arr[i]);
//         }
//     } catch (error) {
//         console.log(error);
//     }
// }
// Bucle();

/**
 * for con if
 */
// function Bucle() {
//     try {
//         let arr = new Object(['Node', 'Java', '.net']);
//         for (let i = 0; i < arr.length; i++) {
//             if (arr[i] === '.net') {
//                 console.log(arr[i]);
//             } else {
//                 console.log('No cumple');
//             }
//         }
//     } catch (error) {
//         console.log(error);
//     }
// }
// Bucle();

/**
 * Sentencia switch
 */
// function Bucle() {
//     try {
//         let arr = new Object(['Node', 'Java', '.net']);
//         switch ('Java') {
//             case '.net':
//                 console.log('El tema es: .net');
//                 break;
//             case 'Java':
//                 console.log('El tema es: Java');
//                 break;
//             case 'Node':
//                 console.log('El tema es: Node');
//                 break;
//             default:
//                 console.log('Por defecto');
//         }
//     } catch (error) {
//         console.log(error);
//     }
// }
// Bucle();

/**
 * for in
 */
// function Bucle() {
//     try {
//         let arr = new Object(['Node', 'Java', '.net']);
//         for (i in arr) {
//             if (arr[i].toUpperCase() === 'NODE') {
//                 console.log(arr[i]);
//             }
//             if (arr[i].toLowerCase() === 'java') {
//                 console.log(arr[i]);
//             }
//         }

//     } catch (error) {
//         console.log(error);
//     }
// }
// Bucle();

/**
 * do while
 */
// function Bucle() {
//     try {
//         let arr = new Object(['Node', 'Java', '.net']);
//         let contador = 0;
//         do {
//             if (contador === 1)
//                 break;
//             console.log(arr[contador]);
//             contador++;
//         } while (contador < arr.length);
//     } catch (error) {
//         console.log(error);
//     }
// }
// Bucle();

/**
 * do while (con continue)
 */
// function Bucle() {
//     try {
//         let arr = new Object(['Node', 'Java', '.net']);
//         let contador = 0;
//         do {
//             contador++;
//             console.log(arr[contador]);
//             if (contador === 1)
//                 continue;
//             console.log('Se ejecutó completo!');
//         } while (contador < arr.length);
//     } catch (error) {
//         console.log(error);
//     }
// }
// Bucle();

/**
 * while
 */
// function Bucle() {
//     try {
//         let arr = new Object(['Node', 'Java', '.net']);
//         let contador = 0;
//         while (contador < arr.length) {
//             console.log(arr[contador]);
//             contador++;
//         };
//     } catch (error) {
//         console.log(error);
//     }
// }
// Bucle();

/**
 * foreach
 */
// function Bucle() {
//     try {
//         let arr = new Object(['Node', 'Java', '.net']);
//         arr.forEach((e, i) => {
//             console.log(`
//             Èl indice es ${i} 
//             el valor es ${e}`);
//         });
//     } catch (error) {
//         console.log(error);
//     }
// }
// Bucle();

/**
 * map
 */
function Bucle() {
    try {
        let arr = new Object(['Node', 'Java', '.net']);
        arr.map((e, i) => {
            console.log(`
            Èl indice es ${i} 
            el valor es ${e}`);
        });
    } catch (error) {
        console.log(error);
    }
}
Bucle();