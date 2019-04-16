function Palindromo(str) {
    try {
        var palabra = str.split("");
        var reverse = palabra.reverse(); 

        var join = reverse.join("");

        if (str == join){
            resultado="es un Palindromo";
        }else{
            resultado="no un Palindromo";
        }

        console.log(resultado);    
        }    
     catch (error) {
        console.log(error);
    }
}
 
Palindromo("ana");


/*ejercicio con for (solo me funciono para cadenas impares)*/

// function Palindromo(str) {
//     try {
//         var Palabra = str.split("");
//         //var reverse = Palabra.reverse(); 

//         for (let i = 0; i < Palabra.length; i++)
//             if(Palabra[i] == Palabra[Palabra.length-[i-1]]){
//                 resultado = "Es un Palindromo"
//             }else {
//                 resultado = "no es un Palindromo"
//             }
//         console.log(resultado);  
//         console.log(Palabra);  
//         }    
//      catch (error) {
//         console.log(error);
//     }
// }
 
// Palindromo("13131");