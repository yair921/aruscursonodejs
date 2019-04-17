function Numerosprimos() {
    try {
        let InicioRango = 'g';
        const FinRango = 'e';
        let arrprimos = []
        if (FinRango > InicioRango) {
            if (InicioRango === 1)
                InicioRango = 2
            for (let x = InicioRango; x <= FinRango; x++) {
                if (esPrimo(x))
                    arrprimos.push(x)
            }
            console.log(arrprimos);
        } else {
            console.log("El rango de Fin es mayor que el de inicio");
        }
    } catch (error) {
        console.log(error);
    }
}

esPrimo = (n) => {
    try {
        let contador = 2;
        let primo = true;
        while ((primo) && (contador != n)) {
            if (n % contador == 0)
                primo = false;
            contador++;
        }
        return primo;
    } catch (error) {
        console.log(error);
    }
}

Numerosprimos();