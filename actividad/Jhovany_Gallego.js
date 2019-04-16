//1er Actividad item 2 numeros pares, Hecha por Jhovany Gallego Sanchez
function Pares(NumMin, NumMax) {
    if (isNaN(NumMin) === false && isNaN(NumMax) === false) {
        let respuesta;
        let arrPares = [];
        try {
            for (let i = NumMin; i <= NumMax; i++) {
                respuesta = Math.round(i / 2);
                if (i / 2 === respuesta) {
                    arrPares.push(i);
                }
            }
            console.log(arrPares);
        } catch (error) {
            console.log(error);
        }
    }else{
        console.log("Por favor ingrese Valores Numericos")
    }
}
Pares(0, 10);
//Pares(0, "10");  //---Prueba con "10"
//Pares(0, "AB"); //---Prueba con valor no numerico