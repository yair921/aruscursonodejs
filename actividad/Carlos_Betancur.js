function calcular() {

    try {

        const readline = require('readline-sync');
        let dato = readline.question('ingresar el dato de su peso en Kg: ');
        //Factores gravitacionales 
        let validacion = parseInt(dato);
        if (isNaN(validacion)) {
            console.log("dato incorrecto")
        }
        else {

            let peso = {

                tierra: 'su peso en la tierra es: ' + parseInt(dato) * 1 + 'Kg',
                luna: 'su peso en la luna es: ' + parseInt(dato) * 0.17 + 'Kg',
                jupiter: 'su peso en jupiter es: ' + parseInt(dato) * 2.36 + 'Kg',
                venus: 'su peso en venus es: ' + parseInt(dato) * 0.9 + 'Kg',
                marte: 'su peso en marte es: ' + parseInt(dato) * 0.38 + 'Kg',
                mercurio: 'su peso en mercurio es: ' + parseInt(dato) * 0.39 + 'Kg',
                saturno: 'su peso en saturno es: ' + parseInt(dato) * 0.93 + 'Kg',
                urano: 'su peso en urano es: ' + parseInt(dato) * 0.89 + 'Kg',
                neptuno: 'su peso en neptuno es: ' + parseInt(dato) * 1.13 + 'Kg',
                pluton: 'su peso en pluton es: ' + parseInt(dato) * 0.07 + 'Kg'

            }
            console.log(peso);

        }



    } catch (error) {
        console.log(error);

    }
}

calcular();