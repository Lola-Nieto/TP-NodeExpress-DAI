let textoEntrada01 = "Escuela", textoEntrada02 = "ORT";
let textoSalida = concatInvert(textoEntrada01, textoEntrada02);
console.clear(); 
console.log(`Textos de Entrada: "${textoEntrada01}" y "${textoEntrada02}"`);
console.log(`Texto de Salida: "${textoSalida}"`);

function concatInvert (texto1, texto2){
let ret = '';
    let concatenados = texto1.concat(texto2);
    ret = concatenados.split("").reverse().join("");
return ret;
}