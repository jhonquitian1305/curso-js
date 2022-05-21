
console.warn("EJERCICIOS NÚMERO 3");

//9) Programa una función que obtenga un numero aleatorio entre 501 y 600.
/*
const aleatorio = (min, max) => {
    let num = Math.round(Math.random() * (max - min))
    console.info(num + min);
}*/

const aleatorio = () => console.info(Math.round((Math.random()*100)+500));

//aleatorio(500, 600);
//aleatorio();




//10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.

const esCapicua = (numero = 0) => {
    if(!numero) return console.warn("No ha ingresado un número a evaluar");
    if(typeof numero !== "number") return console.error(`El valor "${numero}" ingresado no es un número`);
    let alReves = numero.toString().split('').reverse().join('');
    let numeroEnLetras = numero.toString();
    (numeroEnLetras === alReves)
        ? console.info(`Sí es capicua, número original ${numero}, número al revés ${alReves}`)
        : console.info(`No es capicua, número original ${numero}, número al revés ${alReves}`);
    
}

// esCapicua();
// esCapicua("2002");
// esCapicua(2002);
// esCapicua(212.212);



//11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.
const factorial = (numero = undefined) => {
    if(numero < 0) return console.error("No se puede hallar el factorial de un número negativo");
    if(numero === 0) return console.info(`El factorial de ${numero} es 1`);
    if(!numero) return console.warn("No ha ingresado un número a evaluar");
    if(typeof numero !== "number") return console.warn(`El valor "${numero}" ingresado no es un número`);
    let resultado = 1;
    for(let i = numero; i!==0; i--) resultado *= i;
    console.info(`El factorial de ${numero} es ${resultado}`);
}

// factorial();
// factorial("5");
// factorial([1,2,3]);
// factorial({});
// factorial(5);
// factorial(0);
// factorial(1);
// factorial(-5);
// factorial(8);