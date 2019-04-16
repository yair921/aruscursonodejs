/*
Al ejecutar sería el siguiente formato:

node convert [número1] [Opción]

Estas serían las opciones de conversión:
Op. 0:  CM --> Inch
Op. 1:  CM --> Feet
Op. 2:  Feet --> Inch
Op. 3:  Feet --> CM
Op. 4:  Inch --> Feet
Op. 5:  Inch --> CM
*/

let num = process.argv[2];
let convf = process.argv[3];

convertir(num,convf);

function convertir(n1, tFunc) {
    try {
        switch (tFunc) {
            //  CM --> Inch
            case '0': 
            console.log( (n1/2.54).toFixed(2) + ' Inch');
                break;
    
            //  CM --> Feet
            case '1':
            console.log( (n1/30.48).toFixed(2) + ' Ft');
                break;
    
            //  Feet --> Inch
            case '2':
            console.log( (n1*12).toFixed(2) + ' Inch');
            break;
            
            //  Feet --> CM
            case '3':
            console.log( (n1*30.48).toFixed(2) + ' cm');
            break;
            
            //  Inch --> Feet
            case '4':
            console.log( (n1/12).toFixed(2) + ' Ft');
             break;
    
            //  Inch --> CM
            case '5':
            console.log( (n1*2.54).toFixed(2) + ' cm');
                break;
            default:
                console.log('Opción no válida, intente de nuevo.');
                break;
        }

    } catch (error) {
        console.log(error.message);
    }
    
}


