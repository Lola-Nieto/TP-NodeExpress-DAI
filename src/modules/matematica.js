const PI = 3.14;
const arrayNums = ["dos", "cuatro", "ocho", "diez"];
function sumar(x, y) {
    return (x+y); 
}
const restar = (x, y) => {
    return (x-y);
}
const multiplicar = (a, b) => {
return (a*b)
};
function dividir(x, y) {
    x = parseFloat(x);
    y = parseFloat(y);
    let ret;
    if(y != 0){
        ret = x/y;
    }else{
        ret = "No se puede dividir por 0";
    }  
    return ret;
}
export {PI, sumar, multiplicar, restar, arrayNums, dividir};