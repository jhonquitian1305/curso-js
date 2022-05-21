
console.warn("EJERCICIOS NÚMERO 2");


//5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".

const inviertePalabra = (palabra = "") => 
    (!palabra)
        ? console.warn("No ingresó ninguna cadena de texto")
        : console.info(palabra.split('').reverse().join(''));



//inviertePalabra("hola Mundo");
//inviertePalabra("");



//6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.

/*
const palabraRepetida = (texto = "", palabra = "") => {
    if(!texto) return console.warn("No ingresó ningún texto");
    if(!palabra) return console.warn("No ingresó la palabra a buscar");
    let contadorOcurrencias = 0;
    for(let i = 0; i<texto.length;i++){
        let contadorPalabra = 0; 
        if(texto[i]=== ' ') i++;
        for(let j = 0; j<palabra.length;j++){
            if(texto[i] === palabra[j]) {
                i++;
                contadorPalabra++;
            } 
        }       
        if(contadorPalabra === palabra.length) contadorOcurrencias++;
    }
    console.info(`La cantidad de veces que se repite la palabra ${palabra} en el texto es ${contadorOcurrencias}`);
}*/

//Hecha por el tutor
const palabraRepetida = (cadena = "", texto="") => {
    if(!cadena) return console.warn("No ingresó ningún texto");
    if(!texto) return console.warn("No ingresó la palabra a buscar");

    let i = 0, contador = 0;
    while(i !== -1) {
        i = cadena.indexOf(texto, i);
        if(i !== -1){
            i++;
            contador++;
        }
    }
    console.info(`La cantidad de veces que se repite la palabra ${texto} en el texto es ${contador}`);
}

// let texto = "hola mundo mundo adios";
// console.log(texto.indexOf("ho", 0));
// palabraRepetida(texto, 'mundo');





//7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.
/*
const esPalindromo = (palabra) => {
    if(!palabra) return console.warn("No ingresaste una palabra");
    palabra = palabra.toLowerCase(); 
    let j = palabra.length - 1;
    let i = 0;
    for(i = 0; i<palabra.length; i++) {
        if(palabra[i] === ' ') {
            i++;            
        }
        if(palabra[j] === ' ') {
            j--;
        }
        if(palabra[i] !== palabra[j]) return console.info(false);
        if(palabra[i] === palabra[j] && i<j){
            console.log(palabra[i],palabra[j]);
            j--;
        }
        if(j === i) return console.info(true);
    }
    return console.info(false);
}*/

//Hecha por el tutor
const esPalindromo = (palabra = "") => {
    if(!palabra) return console.warn("No ingresaste una palabra");
    palabra = palabra.toLowerCase();
    let alReves = palabra.split('').reverse().join('');
    return (palabra === alReves)
        ? console.info(`Sí es palíndromo, Palabra Original ${palabra}, Palabra al revés ${alReves}`)
        : console.info(`No es palíndromo, Palabra Original ${palabra}, Palabra al revés ${alReves}`);
}


// esPalindromo("");
// esPalindromo("Hola Mundo");
// esPalindromo("Salas");





//8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.

/*
const eliminaPatron = (texto = "", eliminar = undefined) => {
    (!texto)
        ? console.warn("No ha ingresado texto")
        : console.info(texto.split(eliminar).join(''))
}*/


//Hecha por el tutor
const eliminaPatron = (texto= "", patron = "") => {
    (!texto)
        ? console.warn("No ingresaste un texto")
        : (!patron)
            ? console.warn("No ingresaste un patrón de caracteres")
            : console.info(texto.replace(new RegExp(patron, "ig"), ''));
}

let texto = "xyz1, xyz2, xyz3, xyz4 y xyz5";
// eliminaPatron();
// eliminaPatron(texto);
// eliminaPatron(texto, 'xyz');
// eliminaPatron("Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse suscipit incidunt, tenetur ex doloribus quos aliquid assumenda. Dolorem voluptates rem amet, sit accusamus repellat, veniam, dolore vel voluptate pariatur vitae. Sit quo facilis blanditiis, sint est, quod, non autem iste assumenda repellat quasi porro. Itaque nisi atque dolore aliquid optio obcaecati commodi eum perspiciatis minima! Sapiente voluptas odio aliquid obcaecati.Beatae dolorem at velit amet earum quas eaque iure, cum dolorum molestiae impedit expedita saepe fugit dignissimos vero, repellat iusto doloremque consequuntur quos qui? Fugiat necessitatibus hic voluptatem et officia!", "[a-z]");