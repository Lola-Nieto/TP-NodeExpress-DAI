let textoEntrada01, textoEntrada02 = "ORT";
let textoSalida = concatInvert(textoEntrada01, textoEntrada02);
console.clear(); 
console.log(`Textos de Entrada: "${textoEntrada01}" y "${textoEntrada02}"`);
console.log(`Texto de Salida: "${textoSalida}"`);

function concatInvert (texto1, texto2){
let ret = '';
//Hay que testear - si una o ambas de estas no tienen valor (null) queda el valor de texto1 como undefined
    let concatenados = texto1?.concat(texto2);  //texto? hace que no tire error en el concat, pero como está tira error en el split
    ret = concatenados.split("").reverse().join("");
return ret;
}