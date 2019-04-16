/*Realice una funci�n que reciba como par�metro un arreglo de jsons con uno de sus 
atibutos de tipo entero y retorne un arreglo de los objetos ordenados seg�n su �ndice de menor a mayor. 
Cada Json debe tener por lo menos 2 atributos aparte del indice tipo entero. */

let arreglo = [
    { indice: 4, marca: 'Chevrolet', modelo: 'Sail' },
    { indice: 2, marca: 'Renault', modelo: 'Logan' },
    { indice: 1, marca: 'Nissan', modelo: 'Versa' },
    { indice: 3, marca: 'Toyota', modelo: 'Corolla' }
];

console.log(`Ejercicio 9: Ordenar arreglo de objetos seg�n su �ndice.

Este es el arreglo sin ordenar:

`);

console.log(arreglo);

let arregloOrdenado = ordenar(arreglo);

console.log(`

Este es el arreglo ordenado por indice:

`);

console.log(arregloOrdenado);


function ordenar(arr) {
try{
    let arrOrdenado = [];
    for(i=0;i <= arr.length; i++) {
        arr.map(function (o) {

            let x = o.indice;
            //console.log(i);
            //console.log(x);
            if (x == i) arrOrdenado.push(o);

        });
       
    }
    return arrOrdenado;
}catch(error){

    console.log(error);
}
}
