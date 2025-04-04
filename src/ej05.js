let miUrl = null;
let miObjeto = null;
miUrl = 'http://www.ort.edu.ar:8080/alumnos/index.htm?curso=2022&mes=mayo';
//miUrl = 'Cualquier cosa';
miObjeto = parsearUrl (miUrl);
console.log(miObjeto);

function parsearUrl(laURL){
    let urlParseada = null;
    try{
        urlParseada = new URL(laURL);
    } catch (exception) {
        //console.log(exception);
    }
    
    let returnValue = {
        //    host        : urlParseada?.origin ?? null, 
        host        : urlParseada?.host ?? null, 
        pathname    : urlParseada?.pathname ?? null, 
        parametros  : urlParseada?.searchParams ?? {} 
    }
    return returnValue;
    
}