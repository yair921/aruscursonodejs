    // Ordenar arreglo de nombre por longitud de caracteres.	
    // Realice una funci�n que reciba como par�metro un arreglo de string y 
    // retorne un arreglo de Json ordenado de menor a mayor seg�n la longitud 
    // del nombre, y las llaves que debe contener cada json son: "texto" y "longitud".

let lista = ['333', '11', '111', '1111', '88'];

// array temporal contiene objetos con posici�n y valor de ordenamiento
let ordenamiento = lista.map(function(el, i) {
  return { index: i, value: el.toLowerCase() };
})

// ordenando el array mapeado que contiene los valores reducidos
ordenamiento.sort(function(lis1, lis2) {
  if (lis1.value > lis2.value) {
    return 1;
  }
  if (lis1.value < lis2.value) {
    return -1;
  }
  return 0;
});

// contenedor para el orden resultante
let resultado = ordenamiento.map(function(el){
  return lista[el.index];
});

console.log(resultado);