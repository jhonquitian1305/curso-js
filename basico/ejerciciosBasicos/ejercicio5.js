console.warn("EJERCICIOS NÚMERO 5");

//15) Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10.

/*
const binarioADecimal = (numero = undefined, base = 0) => {
    if(numero === undefined) return console.warn("No ingresó ningún número");
    if(typeof numero !=="number") return console.warn(`EL valor "${numero}" no es un número`);
    if(!base) return console.warn("No ingresó la base del número");
    if(typeof base !=="number") return console.warn(`EL valor "${base}" no es un número`);
    let cociente = numero;
    let residuo = [];
    if(!/(2|10)/.test(base)) return console.warn("Valor de la base no reconocido");
    if(base === 10){
        while(cociente >= 2){
            residuo.push(cociente%2);
            cociente = Math.trunc(cociente/2);
        }
        residuo.push(cociente);
        return console.info(`${residuo.reverse().join('')} base 2`);
    } else if(base === 2){
        numero = numero.toFixed();
        let arreglo = numero.split('').reverse();
        let valor = 0
        for(let i=0; i<arreglo.length; i++){
            valor = valor + arreglo[i]*Math.pow(2,i);
        }
        return console.info(`${valor} base 10`);
    }else {
        console.error("La base a convertir no es correcta");
    }
}*/

//Hecho por el tutor
const binarioADecimal = (numero = undefined, base = undefined) => {
    if(numero === undefined) return console.warn("No ingresaste el número a convertir");
    if(typeof numero !== "number") return console.error(`El valor "${numero}" ingresado no es un número`);
    if(base === undefined) return console.warn("No ingresaste la base a convertir");
    if(typeof base !== "number") return console.error(`El "${base}" ingresado no es un número`);

    if(base === 2){
        return console.info(`${numero} base ${base} = ${parseInt(numero,base)} base 10`);
    }else if(base === 10){
        return console.info(`${numero} base ${base} = ${numero.toString(2)} base 2`);        
    }else {
        return console.error("El tipo de base a convertir no es válido");
    }
}




// binarioADecimal();
// binarioADecimal(10);
// binarioADecimal("10",2);
// binarioADecimal(4,10);
// binarioADecimal(100,2);




//16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.
const calculaDescuento = (precio = undefined, descuento = 0) => {
    if(precio === undefined) return console.warn("No ha ingresado ningún precio");
    if(typeof precio !== "number") return console.error(`El valor "${precio}" no es un número`);
    if(precio === 0) return console.error("El precio no puede ser cero");
    if(precio < 0) return console.error("El precio no puede ser negativo");
    if(typeof descuento !== "number") return console.warn(`El valor ${descuento} no es un númmero`);
    if(descuento < 0) return console.error("El descuento no puede ser negativo");
    let valor = precio - precio*(descuento/100);
    console.info(`El valor del producto con el ${descuento}% de descuento es ${valor}`);
}

// calculaDescuento();
// calculaDescuento(2001);
// calculaDescuento("2001");
// calculaDescuento(2000,35);
// calculaDescuento(1000);

//17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).

/*const calculaAniosPasados = (date = undefined) => {
    if(date === undefined) return console.warn("Ingrese un valor");
    if(!(date instanceof Date)) return console.error("No ha ingresado una fecha válida");
    let añoPasado = date.getFullYear();
    let mesPasado = date.getMonth();
    let diaPasado = date.getDate();
    let fecha = new Date();
    let año= fecha.getFullYear();
    let mes= fecha.getMonth();
    let dia= fecha.getDate();
    let añosPasados
    //if(añoPasado >= año) return console.error("Fecha no válida");
    if(mes < mesPasado){
        añosPasados = año - añoPasado - 1;
    }else if(mes === mesPasado){
        if(dia < diaPasado){
            añosPasados = año - añoPasado - 1;
        }else{
            añosPasados = año - añoPasado
        }                
    }else {
        añosPasados = año - añoPasado;
    }
    console.info(`La cantidad de años pasado desde ${añoPasado} es ${añosPasados}`);
}*/

//Hecho por el tutor
const calculaAniosPasados = (fecha = undefined) => {
    if(fecha === undefined) return console.warn("No ingresaste la fecha");
    if(!(fecha instanceof Date)) return console.error("El valor que ingresaste no es una fecha válida");

    let hoyMenosFecha = new Date().getTime() - fecha.getTime(),
        anioEnMS = 1000 * 60 * 60 * 24 * 365,
        aniosHumanos = Math.floor(hoyMenosFecha/anioEnMS);

    return (aniosHumanos < 0)
        ? console.info(`Faltan ${Math.abs(aniosHumanos)} años para el ${fecha.getFullYear()}`)
        : (aniosHumanos > 0)
            ? console.info(`Han pasado ${aniosHumanos} años desde la fecha ${fecha.getFullYear()}`)
            : console.info(`Estamos en el año actual ${fecha.getFullYear()}`)
    
}

// let fechaPasada = new Date(2084, 10, 4);
// let fecha = new Date()
// calculaAniosPasados();
// calculaAniosPasados("hs");
// calculaAniosPasados(new Date());
// calculaAniosPasados(fechaPasada);
