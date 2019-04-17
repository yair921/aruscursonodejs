//ejercicio de factorial //
//realizado por Carlos Alberto Villamil
function factorialvillamil(numero){
    try {
        let resultado = 1;
        for(let i=1; i<=numero;i++){
            //resultado = resultado + (i * (i+1));       
            resultado = resultado *i;       
        }
        console.log(resultado);            
    } catch (error) {
        console.log(error);
    }
        
}
factorialvillamil(4);