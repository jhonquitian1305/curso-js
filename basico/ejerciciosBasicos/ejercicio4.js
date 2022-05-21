console.warn("EJERCICIOS NÚMERO 4");

//12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.

/*
const esPrimo = (numero = undefined) => {
    if(numero < 0) return console.error("El número no puede ser negativo");
    
    if(numero === undefined) return console.warn("Ingrese un número");
    if(typeof numero !== "number") return console.error(`El valor "${numero}" no es un número`);

    if(numero === 0) return console.warn("El número no puede ser 0");
    
    if(numero === 1) return console.warn("El número no puede ser 1");

    let numerosPrimos = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31];
    if(numerosPrimos.find(element => element === numero)) return console.info(`El número ${numero} es un número primo`);    

    if(numero % 2 === 0) return console.info(`El número ${numero} es un número compuesto`)
    
    let numeroPrimo = Math.round(Math.sqrt(numero));
    let contador = 0;
    for(let i = 0; i<numerosPrimos.length;i++){
        if(numerosPrimos[i] <= numeroPrimo){
            if(numero % numerosPrimos[i] === 0){
                return console.info(`El número ${numero} es un número compuesto`);
            }
        }
    }
    console.info(`El número ${numero} es un número primo`);
}*/

//Hecho por el tutor
const esPrimo = (numero = undefined) => {
    if(numero === undefined) return console.warn("No ingresaste un número");

    if(typeof numero !== "number") return console.error(`El valor "${numero} ingresado NO es un número"`);

    if(numero === 0) return console.error("El número no puede ser cero");

    if(numero === 1) return console.error("El número no puede ser 1");

    if(numero < 0 ) return console.error("El número no puede ser negativo");

    let divisible = false;

    for(let i=2; i<numero;i++){
        if(numero % i === 0){
            divisible = true;
            break
        }
    }

    return (divisible)
        ? console.info(`El número ${numero} es un número compuesto`)
        : console.info(`El número ${numero} es un número primo`);
}

// esPrimo();
// esPrimo("2");
// esPrimo(2);
// esPrimo(23);
// esPrimo(-11);
// esPrimo(24);
// esPrimo(71);
// esPrimo(931);
// esPrimo(529);





//13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.

const esPar = (numero = undefined) => {
    if(!numero) return console.warn("Ingrese un valor");
    if(typeof numero !== "number") return console.warn(`El valor "${numero}" no es un número`);
    (numero % 2 === 0)
        ? console.info(`El número ${numero} es par`)
        : console.info(`El número ${numero} es impar`)    
}

// esPar();
// esPar("2");
// esPar(0);
// esPar(4);
// esPar(5);
// esPar(-5);
// esPar(-4);

//14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.

const celsiusAFarenheit = (grado = undefined, temperatura ="") => {
    //temperatura = temperatura.toUpperCase();
    if(grado === undefined) return console.warn("Ingrese un valor para los grados");
    
    if(typeof grado !== "number") return console.log("El valor no es un número");

    if(!temperatura) return console.warn("Ingrese el valor a convertir");

    if(typeof temperatura !== "string") return console.warn("El valor ingresado no es una cadena de texto");

    if(temperatura.length !== 1 || !/(C|F)/.test(temperatura)) return console.warn("El valor de la unidad no reconocido");
    let valor = 0;
    if(temperatura === "C"){
        valor = grado * 1.8 + 32;
        return console.info(`${grado}°C = ${Math.round(grado * 9/5 + 32)}°F`)
    }
    if(temperatura === "F"){
        valor = (grado - 32)/1.8;
        return console.info(`${grado}°F = ${Math.round((grado-32)*5/9)}°C`);
    }
    console.info(valor);
}

// celsiusAFarenheit();
// celsiusAFarenheit("2");
// celsiusAFarenheit(15);
// celsiusAFarenheit(15, true);
// celsiusAFarenheit(15, "Hola");
// celsiusAFarenheit(15, "E");
// celsiusAFarenheit(100, "C");
// celsiusAFarenheit(100, "F");
         