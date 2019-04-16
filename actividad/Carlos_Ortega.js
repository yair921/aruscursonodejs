
function factorial(x) {
    try {
        if (x == 1) {
            return 1;
        } else{
        let result = x;
        
            menos = x - 1
            result = result * factorial(menos);
        
        return result;
        }
    } catch (error) {
        console.log(error)
    }
}

let x = 5;
let fac = factorial(x);
console.log(`El factorial de ${x} es: ${fac}`);