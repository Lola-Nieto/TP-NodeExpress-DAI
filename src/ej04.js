import fs from 'fs';

// const { writeFile } = require('fs/promises'); 
//--> No se puede usar pq no es CommonJS sino q es un ES module
//Eso está definido en el package.json donde dice "type": "module" 


const ARCHIVO_ENTRADA = "./archivo-entrada.txt";
const ARCHIVO_SALIDA = "./archivo-salida.txt";
console.clear();
copiar(ARCHIVO_ENTRADA, ARCHIVO_SALIDA);

 function copiar(origen, destino){
    const data = readThisFile(origen);
    writeToFile(destino, data);

}

function readThisFile(origen){
    let data;
    try {
        data = fs.readFileSync(origen);
        console.log(data.toString());
      } catch (error) {
        console.error(`Got an error trying to read the file: ${error.message}`);
     } 
     return data;
}
function writeToFile(fileName, data) {
    try {
      fs.writeFileSync(fileName, data);
      console.log(`Wrote data to ${fileName}`);
    } catch (error) {
      console.error(`Got an error trying to write the file: ${error.message}`);
    }
  }
