import { getCountryByAbbreviation } from 'currency-map-country';
import { getCurrencyAbbreviation } from 'currency-map-country';
 


let monedaDelPais, codigoPais;

codigoPais = 'AR';
monedaDelPais = obtenerMoneda(codigoPais);
console.log(`La moneda del país ${codigoPais} es: ${monedaDelPais}`);


codigoPais = 'UZA';
monedaDelPais = obtenerMoneda(codigoPais);
console.log(`La moneda del país ${codigoPais} es: ${monedaDelPais}`);



function obtenerMoneda(codPais){
    let ret; 

        let nombrePais = getCountryByAbbreviation(codPais); //Nombre del país a partir de abreviación
        ret = getCurrencyAbbreviation  (nombrePais); //Abreviación de la moneda a partir del nombre del país
  
    ret == undefined &&  (ret = null);
    
    return ret;
}