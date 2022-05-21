
console.warn("EJERCICIOS NÚMERO 1");

//1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.

/*const cuentaCaracteres = (cadena) => {
    if(typeof cadena === "string"){        
        console.log(`El tamaño de ${cadena} es ${cadena.length}`);
    }else{
        console.error("El valor ingresado no es una cadena");
    }
}*/

//Como función expresada en una sola línea de código, hecha por el tutor
const cuentaCaracteres = (cadena = "") => 
    (!cadena) 
        ? console.warn("No ingresaste ninguna cadena")
        : console.info(`La cadena "${cadena}" tiene ${cadena.length} caracteres`);

const perro =  {
    nombre: "hola",
    raza: "mundo"
}

function Perro(nombre, raza) {
    nombre,
    raza
}

// cuentaCaracteres("Hola Mundo");
// cuentaCaracteres(1418);
// cuentaCaracteres(true);
// cuentaCaracteres(perro);
// cuentaCaracteres(Perro("Sasha", "Pastor"));
// cuentaCaracteres("");





//2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe.miFuncion("Hola Mundo", 4) devolverá "Hola".

/*const textoRecortado = (texto, cantidad) => {
    if(typeof texto === "string" && typeof cantidad === "number"){
        console.log(texto.substr(0,cantidad));        
    }else{
        console.error("No ingresó un valor válido");
    }
}*/

//Hecha por el tutor
const textoRecortado = (texto = "", cantidad = undefined) =>
    (!texto)
        ? console.warn("No ingresaste una cadena de texto")
        : (cantidad === undefined)
            ? console.warn("No ingresaste la longitud para recortar el texto")
            : console.info(texto.slice(0, cantidad));

// textoRecortado("Mañana hay clase", 10);
// textoRecortado();
// textoRecortado("Hola Hola");
// textoRecortado("", 5);





//3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe.miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].

/*const arrayTexto = (cadena, separador) => {
    if(typeof cadena === "string" && typeof separador === "string"){
        console.log(cadena.split(separador));
    }else{
        console.log("Los valores ingresados no son todos cadenas");
    }
}*/

//Hecha por el tutor
const arrayTexto = (cadena = "", separador = undefined) =>
    (!cadena)
        ? console.warn("No ingresaste una cadena de texto")
        : (separador === undefined)
            ? console.warn("No ingresaste el caracter separador")
            : console.info(cadena.split(separador))

// arrayTexto('hola mundo', ' ');
// arrayTexto();
// arrayTexto("Hola Mundo");





//4) Programa una función que repita un texto X veces, pe.miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.

/*const repiteTexto = (cadena, repeticion) => {
    if(typeof cadena === "string" && typeof repeticion === "number"){
        console.log(cadena.concat(' ').repeat(repeticion));
    }else{
        console.error("Ocurrió un error, valores no válidos");
    }
}*/

// Hecha por el tutor
const repiteTexto = (texto = "", veces = undefined) => {
    if(!texto) return console.warn("No ingresaste un texto");

    if(veces === undefined) return console.warn("No ingresaste el número de veces a repetir el texto");

    if(veces === 0) return console.error("El número de veces no puede ser 0");

    if(Math.sign(veces) === -1) return console.error("El número de veces no puede ser negativo");

    for(let i = 1; i <= veces; i++) console.info(`${texto}, ${i}`);
}

// repiteTexto("Repitiendo texto", 3);
// repiteTexto("Repitiendo texto", 0);
// repiteTexto("Repitiendo texto", -20);
// repiteTexto("", 20);
// repiteTexto("Repitiendo texto");