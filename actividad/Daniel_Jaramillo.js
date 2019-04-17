/**
 * Ejercicio 7
 */
function conversorLongitudes(lngActual, lngDestino, valor) {
    let resultado = null;
    // Validar los valores ingresados
    if (typeof lngActual != 'string' || typeof lngDestino != 'string' || typeof valor != 'number'
        || lngActual === '' || lngDestino === '' || valor == null) {
        // Valida que los tipos de datos sean correctos
        console.log('Ingresa datos válidos o llena todos los campos solicitados!');
    } else {
        try {
            // Si todos los campos son correctos, valida el tipo de conversión
            if (lngActual.toLowerCase() === 'centimetros' && lngDestino.toLowerCase() === 'pulgadas') {
                // Convertir de centimetros a pulgadas
                resultado = valor / 2.54;
                return console.log(valor + ' centimetros, equivalen a: ' + resultado + ' pulgadas.');
            } else if (lngActual.toLowerCase() === 'pulgadas' && lngDestino.toLowerCase() === 'centimetros') {
                // Convertir de pulgadas a centimetros
                resultado = valor * 2.54;
                return console.log(valor + ' pulgadas, equivalen a: ' + resultado + ' centimetros.');
            } else if (lngActual.toLowerCase() === 'centimetros' && lngDestino.toLowerCase() === 'pies') {
                // Convertir de centimetros a pies
                resultado = valor * 0.032808;
                return console.log(valor + ' centimetros, equivalen a: ' + resultado + ' pies.');
            } else if (lngActual.toLowerCase() === 'pies' && lngDestino.toLowerCase() === 'centimetros') {
                // Convertir de pies a centimetros
                resultado = valor / 0.032808;
                return console.log(valor + ' pies, equivalen a: ' + resultado + ' centimetros.');
            } else if (lngActual.toLowerCase() === 'pulgadas' && lngDestino.toLowerCase() === 'pies') {
                // Convertir de pulgadas a pies
                resultado = valor * 0.083333;
                return console.log(valor + ' pulgadas, equivalen a: ' + resultado + ' pies.');
            } else if (lngActual.toLowerCase() === 'pies' && lngDestino.toLowerCase() === 'pulgadas') {
                // Convertir de pies a pulgadas
                resultado = valor / 0.083333
                return console.log(valor + ' pies, equivalen a: ' + resultado + ' pulgadas.');
            } else {
                return console.log('Ingrese unidades validas para realizar la conversión.');
            }
        } catch (error) {
            console.log('Se presento un error en la operación. Detalles: ' + error);
        }
    }
}

// Llamada a la función, con los valores especificados
conversorLongitudes('centimetros', 'pies', 10);