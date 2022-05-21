export const PI = Math.PI;

export let usuario = "Jhon";
let password = "qwerty";
//export default password; //Si se va a utilizar el default se debe declarar primero y luego pasarselo


export default function saludar() {
    console.log("Hola módulos +ES6");
}

export class Saludar {
    constructor() {
        console.log("Hola Clases +ES6");        
    }

}