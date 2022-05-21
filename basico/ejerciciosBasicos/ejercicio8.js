console.warn("EJERCICIOS NÚMERO 8");

//24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente, pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.

const ordenaAscDesc = (array = undefined) => {
    if(array === undefined) return console.warn("No ha ingresado ningún valor");
    if(array.length === 0) return console.warn("No ha ingresado ningún valor en el arreglo");
    if(!(array instanceof Array)) return console.error(`El valor de "${array}" no pertenece a un arreglo`);
    for(let i=0; i<array.length; i++){
        if(typeof array[i] !== "number") return console.error("Todos los valores del arreglo deben ser números");               
    }
    return console.info({
        array,
        asc: array.map(el => el).sort((a,b)=>a-b),
        desc: array.map(el => el).sort((a,b)=>b-a)
    })
}

// ordenaAscDesc([4, 2, 5, 1, 3,10]);





//25) Programa una función que dado un arreglo de elementos, elimine los duplicados, pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].
const quitarDuplicados = (array = undefined) => {
    if(array === undefined) return console.warn("No ha ingresado ningún valor");
    if(!(array instanceof Array)) return console.error(`El valor de "${array}" no pertenece a un arreglo`);
    if(array.length === 0) return console.warn("No ha ingresado ningún valor en el arreglo");
    if(array.length === 1) return console.warn("El arreglo debe tener almenos dos elementos");
    
    // return console.info({
    //     original: array,
    //     sinDuplicados: array.filter((value, index, self) => self.indexOf(value) === index)
    // })
    return console.info({
        original: array,
        sinDuplicados: [... new Set(array)]
    })
}

// quitarDuplicados(["x", 10, "x", 2, "10", 10, true, true]);






//26) Programa una función que dado un arreglo de números obtenga el promedio, pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.
const arrayPromedio = (array = undefined) => {
    if(array === undefined) return console.warn("No ha ingresado ningún valor");
    if(array.length === 0) return console.warn("No ha ingresado ningún valor en el arreglo");
    if(!(array instanceof Array)) return console.error(`El valor de "${array}" no pertenece a un arreglo`);
    for(let i=0; i<array.length; i++){
        if(typeof array[i] !== "number") return console.error("Todos los valores del arreglo deben ser números");               
    }
    return console.info(
        array.reduce((total, num, index, arr) => {
            total += num;
            if(index === array.length-1){
                return `El promedio de ${array.join(' + ')} es ${total/array.length}`
            }else{
                return total;
            }
        })
    )
}

// arrayPromedio([9,8,7,6,5,4,3,2,1,0]);
