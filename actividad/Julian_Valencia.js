function calcular() {

    try {
        const readline = require('readline-sync');
        let dato = readline.question('ingresar una palabra: ');
        dato2 = ""
        for (var i = dato.length - 1; i >= 0; i--){        
            dato2 += dato[i];
        } 
        if(dato === dato2)
        {
            console.log("Es Palindromo")
        }
        else
        {
            console.log("No Es Palindromo")
        }
        console.log(dato2)
        
 
    } catch (error) {
        console.log(error);
 
    }
 }
 //
 calcular();