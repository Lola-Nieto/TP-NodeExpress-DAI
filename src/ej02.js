import {PI, sumar, multiplicar, restar, arrayNums, dividir} from './modules/matematica.js';
let total, numero1=10, numero2=20;
console.clear();
console.log(`La constante PI vale '${PI}'`); 
total = sumar(numero1, numero2);
console.log(`sumar(${numero1}, ${numero2}) = ${total}`);
console.log(`restar(${numero1}, ${numero2}) = ${restar(numero1, numero2)}`);
console.log(`multiplicar(${numero1}, ${numero2}) = ${multiplicar(numero1, numero2)}`);
total = dividir(numero1, numero2);
console.log(`dividir(${numero1}, ${numero2}) = ${total}`);
//Error: tira undefined el dividir

console.log(`Contenido del array:`);
arrayNums.forEach((element) => console.log(element));
