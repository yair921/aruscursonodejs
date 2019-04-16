//Ejercicio 8
function PesoSistemaSolar(Peso){
    try{
        if (Peso > 0) {
            let obj= [
                {Jupiter: Math.round(2.55 * Peso)},
                {Venus: Math.round(0.87 * Peso)},
                {Urano: Math.round(0.99 * Peso)},
                {Marte: Math.round(0.38 * Peso)},
                {Mercurio: Math.round(0.39 * Peso)},
                {Saturni: Math.round(0.93 * Peso)},
                {Netptuno: Math.round(1.38 * Peso)},
                {Tierra:Math.round(1 * Peso)}
            ];
            console.log(obj);           
        }
        else{
            console.log('Debe ser númerico el peso'); 
        }
    }catch(error){
        console.log(error);
    }
}
PesoSistemaSolar(60);