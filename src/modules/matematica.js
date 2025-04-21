const PI = 3.14;
const arrayNums = ["dos", "cuatro", "ocho", "diez"];
function sumar(x, y) {
    const sonNums = ValidarSiSonNumeros(x, y);
    if(sonNums == true)
        return (parseInt(x)+parseInt(y)); 
    else{
        return sonNums; 
    }
}
const restar = (x, y) => {
    const sonNums = ValidarSiSonNumeros(x, y);

    if(sonNums ==true)
        return (x-y);
    else{
        return sonNums; 
    }
    
}
const multiplicar = (a, b) => {
 
const sonNums = ValidarSiSonNumeros(a, b);

if(sonNums ==true)
    return (a*b);
else{
    return sonNums; 
}

};
function dividir(x, y) {

const sonNums = ValidarSiSonNumeros(x, y);
let ret;

if(sonNums ==true)
if(y != 0){
    ret = x/y;
}else{
    ret = "No se puede dividir por 0";
}  
else{
    ret = sonNums; 
}
    return ret;
}

function ValidarSiSonNumeros(x, y){
    let ret = true;
    if(isNaN(x) || isNaN(y))
    ret = "Error, los ingresos no son números";

    return ret;
}

export {PI, sumar, multiplicar, restar, arrayNums, dividir};