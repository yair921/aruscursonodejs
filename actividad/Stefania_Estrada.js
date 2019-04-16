function NumPares(n1, n2) {
    try {

        let pares = [];

        for (let i = n1; i <= n2; i++) {
            if ((i % 2) == 0) {
                pares.push(i);
                //console.log(pares);
            };
        };
        console.log (`Los valores pares entre ${n1} y ${n2} son: ${pares}`);
    } catch (error) {
        console.log(error);
    }
};

//NumPares(0, 15); 
try {
    let readline = require('readline-sync');
    let num1 = readline.question("Ingrese Primer numero: ");
    console.clear();
    let num2= readline.question("Ingrese Segundo numero: ");
    console.clear();

    if ((num1 % 1) == 0 && (num2 % 1) == 0) {
        if(num1<=num2){
            //console.log('Hola');
            NumPares(num1, num2);
    }else{
        console.clear();
        console.log('Valor invalido; El segundo número es mayor al primero');
    }
    } else {
        console.clear();
        console.log('Valor invalido; No es un numero entero');
    };
} catch (error) {
    console.log(error);
};
