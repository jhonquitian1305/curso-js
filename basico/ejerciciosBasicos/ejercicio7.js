console.warn("EJERCICIOS NÚMERO 7");

//21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].
/*const alCuadrado = (array = undefined) => {
    if(array === undefined) return console.warn("No ha ingresado ningún valor");    
    if(!(array instanceof Array)) return console.error(`El valor de "${array}" no pertenece a un arreglo`);
    if(array.length === 0) return console.warn("No ha ingresado ningún valor en el arreglo");
    for(let i=0; i<array.length; i++){
        if(typeof array[i] !== "number") return console.error("Todos los valores del arreglo deben ser números");        
    }
    const arrayElevado = [];
    for(let i = 0; i<array.length; i++) arrayElevado.push(Math.pow(array[i],2));
    console.info(`Array ingresado ${array} | Array devuelto ${arrayElevado}`);
}*/

//Hecho por el tutor
const alCuadrado = (array = undefined) => {
    if(array === undefined) return console.warn("No ha ingresado ningún valor");    
    if(!(array instanceof Array)) return console.error(`El valor de "${array}" no pertenece a un arreglo`);
    if(array.length === 0) return console.warn("No ha ingresado ningún valor en el arreglo");
    for(let numero of array) {
        if(typeof numero !== "number") return console.error("Todos los valores del arreglo deben ser números");
    }
    const newArr = array.map(el  => el * el);
    return console.info(`Arreglo original: ${array},\nArreglo elevado al cuadrado: ${newArr}`);
}

// alCuadrado();
// alCuadrado([]);
// alCuadrado("[1,2]");
// alCuadrado([1,2,3,4]);
// alCuadrado([1,2,3,4, "15"]);




//22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].
/*const menorYMayor = (array = undefined) => {
    if(array === undefined) return console.warn("No ha ingresado ningún valor");
    if(array.length === 0) return console.warn("No ha ingresado ningún valor en el arreglo");
    if(!(array instanceof Array)) return console.error(`El valor de "${array}" no pertenece a un arreglo`);
    for(let i=0; i<array.length; i++){
        if(typeof array[i] !== "number") return console.error("Todos los valores del arreglo deben ser números");               
    }
    let menor=array[0],
        mayor=array[0];
    for(let i=1; i<array.length; i++){
        if(array[i]<menor) menor = array[i];
        if(array[i]>mayor) mayor = array[i];
    }
    let arrayMenorYMayor = [mayor, menor];
    console.info(`El número mayor es ${mayor} y el número menor es ${menor} = [${arrayMenorYMayor}]`);
}*/


//Hecho por el tutor
const menorYMayor = (array = undefined) => {
    if(array === undefined) return console.warn("No ha ingresado ningún valor");    
    if(!(array instanceof Array)) return console.error(`El valor de "${array}" no pertenece a un arreglo`);
    if(array.length === 0) return console.warn("No ha ingresado ningún valor en el arreglo");
    for(let numero of array) {
        if(typeof numero !== "number") return console.error("Todos los valores del arreglo deben ser números");
    }
    return console.info(`Arreglo original: ${array}\nValor mayor: ${Math.max(array)},\nValor menor: ${Math.min(...array)}`);
}

// menorYMayor();
// menorYMayor([]);
// menorYMayor("[1, 2]");
// menorYMayor([1, 4, 5, 99, -60]);
// menorYMayor([1, 4, 5, 99, -60, -15, 2, 200, -98, true]);




//23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.
/*const paresEImpares = (array = undefined) => {
    if(array === undefined) return console.warn("No ha ingresado ningún valor");
    if(array.length === 0) return console.warn("No ha ingresado ningún valor en el arreglo");
    if(!(array instanceof Array)) return console.error(`El valor de "${array}" no pertenece a un arreglo`);
    for(let i=0; i<array.length; i++){
        if(typeof array[i] !== "number") return console.error("Todos los valores del arreglo deben ser números");        
    }
    let arrayPares = [],
        arrayImpares = [];
    
    for(let i = 0; i<array.length; i++){
        if(array[i] % 2 === 0){
            arrayPares.push(array[i])
        }else {
            arrayImpares.push(array[i]);
        }
    }
    console.info(`Array de números pares: ${arrayPares} \nArray de números impares: ${arrayImpares}`);
}*/


//Hecho por el tutor
const paresEImpares = (array = undefined) => {
    if(array === undefined) return console.warn("No ha ingresado ningún valor");    
    if(!(array instanceof Array)) return console.error(`El valor de "${array}" no pertenece a un arreglo`);
    if(array.length === 0) return console.warn("No ha ingresado ningún valor en el arreglo");
    for(let numero of array) {
        if(typeof numero !== "number") return console.error("Todos los valores del arreglo deben ser números");
    }

    return console.info({
        pares: array.filter(num => num%2===0),
        impares: array.filter(num => num%2===1),
    })
}

// paresEImpares([1,5,6,7,8,10,-5,6,-20,0])