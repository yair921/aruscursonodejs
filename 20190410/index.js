/**
 * Problema
 */

// function main() {
//     try {
//         let al = getDatosAlumno();
//         let materias = getMaterias(al);
//         procesarInscripcion(materias);
//     } catch (error) {
//         console.log(error);
//     }
// }

// function getDatosAlumno() {
//     setTimeout(() => {
//         return 'Jose';
//     }, 3000);
// }
// function getMaterias(alumno) {
//     setTimeout(() => {
//         let obj = {
//             "Jose": ['Node', 'Java', '.net'],
//             "Maria": ['c++', 'c', 'foxpro']
//         }
//         return obj[alumno];
//     }, 2000);
// }
// function procesarInscripcion(materias) {
//     setTimeout(() => {
//         return `
//         Proceso de inscripción realizado con éxito.
//         Las materias inscritas son:
//         ${materias}
//         `
//     }, 1000);
// }

// main();

/**
 * Implementación de promesas
 */
// function main() {
//     try {
//         getDatosAlumno()
//             .then((result) => {
//                 return getMaterias(result);
//             })
//             .then(materias => {
//                 return procesarInscripcion(materias);
//             })
//             .then(r => {
//                 console.log(r);
//             })
//             .catch((err => {
//                 console.log(err);
//             }));
//     } catch (error) {
//         console.log(error);
//     }
// }

// function getDatosAlumno() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (1 === 1) {
//                 resolve('Maria');
//             } else {
//                 reject('Error al obtener alumno!!');
//             }
//         }, 1000);
//     });
// }
// function getMaterias(alumno) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let obj = {
//                 "Jose": ['Node', 'Java', '.net'],
//                 "Maria": ['c++', 'c', 'foxpro']
//             }
//             resolve(obj[alumno]);
//         }, 1000);
//     });
// }
// function procesarInscripcion(materias) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(`
//             Proceso de inscripción realizado con éxito.
//             Las materias inscritas son:
//             ${materias}
//             `);
//         }, 1000);
//     });
// }

// main();

/**
 * async await
 */
// async function main() {
//     try {
//         let alumno = await getDatosAlumno();
//         let materias = await getMaterias(alumno);
//         let proceso = await procesarInscripcion(materias);
//         console.log(proceso);
//     } catch (error) {
//         console.log(error);
//     }
// }

// function getDatosAlumno() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (1 === 1) {
//                 resolve('Maria');
//             } else {
//                 reject('Error al obtener alumno!!');
//             }
//         }, 1000);
//     });
// }
// function getMaterias(alumno) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let obj = {
//                 "Jose": ['Node', 'Java', '.net'],
//                 "Maria": ['c++', 'c', 'foxpro']
//             }
//             resolve(obj[alumno]);
//         }, 1000);
//     });
// }
// function procesarInscripcion(materias) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(`
//             Proceso de inscripción realizado con éxito.
//             Las materias inscritas son:
//             ${materias}
//             `);
//         }, 1000);
//     });
// }

// main();

/**
 * Promise.all
 */
// function main() {
//     try {
//         let arr = [
//             promesa(3000, 'El resultado es 1'),
//             promesa(2000, 'El resultado es 2'),
//             promesa(100, 'El resultado es 3')
//         ];
//         Promise.all(arr).then((data) => {
//             console.log(data);
//         });
//     } catch (error) {

//     }
// }

// function promesa(milisegundos, n) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(n);
//         }, milisegundos);
//     });
// }

// main();

/**
 * Promise.race
 */
function main() {
    try {
        let arr = [
            promesa(1000, 'El resultado es 1'),
            promesa(2000, 'El resultado es 2'),
            promesa(100, 'El resultado es 3')
        ];
        Promise.race(arr).then((data) => {
            console.log(data);
        });
    } catch (error) {
        console.log(error);
    }
}

function promesa(milisegundos, n) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (milisegundos === 100) {
                reject('Error!!');
            } else {
                resolve(n);
            }
        }, milisegundos);
    });
}

main();