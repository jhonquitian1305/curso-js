import saludar, {Saludar, PI, usuario} from './constantes.js';
import {aritmetica as calculos} from './aritmetica.js';

console.log("Archivo modulos.js");
console.log(PI, usuario);
//console.log(aritmetica.sumar(4,3))
console.log(calculos.sumar(4,3))
console.log(calculos.restar(4,3))
saludar();
let saludo = new Saludar();
saludo;