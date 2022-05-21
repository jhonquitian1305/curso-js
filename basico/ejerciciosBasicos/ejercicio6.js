console.warn("EJERCICIOS NÚMERO 6");

//18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.
/*const cuentaVocalesYConsonantes = (texto = "") => {
    if(!texto) return console.warn("No ingresó ningún texto");
    if(typeof texto !== "string") return console.warn(`El valor ingresado ${texto} no es un texto`);
    let vocales = /[aeiouáéíóúü]/ig;
    let consonantes = /[b-d]|[f-h]|[j-n]|[p-t]|[v-z]/ig
    console.info(`La cantidad de vocales es ${texto.match(vocales).length} y la cantidad de consonantes es ${texto.match(consonantes).length}`);
}*/

//Hecho por el tutor
const cuentaVocalesYConsonantes = (cadena = "") => {
    if(!cadena) return console.warn("No ingresó ningún texto");
    if(typeof cadena !== "string") return console.warn(`El valor ingresado ${cadena} no es un texto`);

    let vocales = 0,
        consonantes = 0;
    
    cadena = cadena.toLowerCase();

    for (let letra of cadena) {
        if(/[aeiouáéíóúü]/.test(letra)){
            vocales++;
        }
        if(/[bcdfghjklmnñpqrstvwxyz]/.test(letra)){
            consonantes++;
        }
    }
    return console.info({
        cadena,
        vocales,
        consonantes
    })
}

// cuentaVocalesYConsonantes();
// cuentaVocalesYConsonantes(21);
// cuentaVocalesYConsonantes("hola mundo");
// cuentaVocalesYConsonantes("ñoño");



//19) Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero.
const validaNombre = (nombre = "") => {
    if(!nombre) return console.warn("No ingresó ningún nombre");
    if(typeof nombre !== "string") return console.warn(`El valor ingresado ${nombre} no es un nombre`);

    let expReg = /^[A-Za-zÑñÁáÉéÍíÓóÚú\s]+$/g.test(nombre);

    return (expReg)
            ? console.info(`"${nombre} es un nombre válido"`)
            : console.info(`"${nombre} no es un nombre válido"`);
}

// validaNombre();
// validaNombre(21);
// validaNombre("Jhon");
// validaNombre("Jhon Quitian");
// validaNombre("Jhon Quitian 123");







//20) Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.
const validaCorreo = (correo = "") => {
    if(!correo) return console.warn("No ingresó ningún correo");
    if(typeof correo !== "string") return console.warn(`El valor ingresado ${correo} no es un correo`);

    let expReg = /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i.test(correo);
    return (expReg)
        ? console.info(`${correo} es un correo válido`)
        : console.warn(`${correo} no es un correo`);    
}

// validaCorreo();
// validaCorreo(21);
// validaCorreo('asfasfasf');
// validaCorreo("sas@gmail.com");
// validaCorreo("cart@jhon-s.quitian");
// validaCorreo("cart@jhon_s.quitian");
// validaCorreo("cart@jhon_s.");
// validaCorreo("@jhon_s.quitian");




//Fusión 19 y 20
const validarPatron = (cadena = "", patron = undefined) => {
    if(!cadena) return console.warn("No ingresaste una cadena de texto a evaluar");
    if(typeof cadena !== "string") return console.error(`El valor "${cadena}" ingresado, NO es una cadena de texto`);
    if(patron === undefined) return console.warn("No ingresaste un patrón a evaluar");
    if(!(patron instanceof RegExp)) return console.error(`El valor "${patron}" ingresado, NO es una expresión regular`);

    let expReg = patron.test(cadena);

    return (expReg)
        ? console.info(`"${cadena}" cumple con el patrón ingresado`)
        : console.info(`"${cadena}" NO cumple con el patrón ingresado`);
}

// validarPatron();
// validarPatron({});
// validarPatron("Hola mundo");
// validarPatron("Hola mundo", "hola");
// validarPatron("Hola mundo", [1,2,3]);
// validarPatron("Jhon", /^[A-Za-zÑñÁáÉéÍíÓóÚú\s]+$/g);
// validarPatron("Jhon19", /^[A-Za-zÑñÁáÉéÍíÓóÚú\s]+$/g);
// validarPatron("cart@jhon-s.quitian", /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i);
// validarPatron("cart@jhon-s.ghass", new RegExp("/[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/", "i"));
// validarPatron("cart@jhon-s", new RegExp("/[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/", "i"));