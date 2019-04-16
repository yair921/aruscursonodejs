//Realice una función que reciba como parámetro el valor del tiempo (segundos) del cual se quiere 
//calcular el recorrido de la luz. Debe retornar un json con la distacia que recorre la luz en kilometros 
//y millas en el tiempo recibido como parametro.

const vkm = 300000;
const vml = 186000;
let Distancia = 15;

try {
    let dk = vkm * Distancia;
    let dm = vml * Distancia;
  
    if (Distancia >=0) {
        let respuesta = {
            'distancia en kilometros': dk,
            'distancia en millas': dm
        }
        console.log(respuesta);
    } else {
        console.log('El valor ingresado no es valido');
    }

} catch (error) {
    console.log(error);
} finally {
    console.log('El recorrido de la luz fue calculado exitosamente');
}

