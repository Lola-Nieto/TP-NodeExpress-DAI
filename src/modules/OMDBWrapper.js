import axios from "axios";
const APIKEY  = "b8b3928a";   


const OMDBSearchByPage = async (movieTitle, page = 1) => {
  console.log('movieTitle', movieTitle)
  console.log('page', page)
    let returnObject = {

        respuesta     : false,
  
        cantidadTotal : 0,
  
        datos         : []
  
      };


    try{
        let resultadosDelTest = await Test(`http://www.omdbapi.com/?apikey=${APIKEY}&s=${movieTitle}&page=${page}`);
console.log('resultadosDelTest', resultadosDelTest)
        if(resultadosDelTest != undefined){
            returnObject.datos = resultadosDelTest.Search; //Muestra los 1eros 10, como si no estuviera lo de page --> Pq????
            returnObject.respuesta = resultadosDelTest.Response;
            returnObject.cantidadTotal = resultadosDelTest.totalResults;
            
        }

    }catch (error){
    console.log(error);
    }

  return returnObject;

};


const OMDBSearchComplete = async (movieTitle) => {
    let returnObject = {

        respuesta     : false,
  
        cantidadTotal : 0,
  
        datos         : []
  
      };

    try{
         let resultadosDelTest = await Test('http://www.omdbapi.com/?apikey='+APIKEY+'&s='+movieTitle);
         

         if(resultadosDelTest != undefined){
          let cantResultados = resultadosDelTest.totalResults;
          let cantRepeticiones = Math.floor(cantResultados /10);
          console.log('cantRepeticiones'+cantRepeticiones);
          if(cantResultados%10 != 0){
            cantRepeticiones++;
          }
          
       returnObject.respuesta = resultadosDelTest.Response;
       returnObject.cantidadTotal = cantResultados;
       returnObject.datos = resultadosDelTest.Search; //Devuelve los datos de la 1era pág
       for(let i = 2; i <= cantRepeticiones; i++){
        returnObject.datos+= OMDBSearchByPage(movieTitle, i).datos;
       }
       }

    }catch(error){
    console.log(error);


}

  return returnObject;

};


const OMDBGetByImdbID = async (imdbID) => {

    let returnObject = {

        respuesta     : false,
  
        cantidadTotal : 0,
  
        datos         : {}
  
      };
          try{
         let  resultadosDelTest = await Test(`http://www.omdbapi.com/?i=`+imdbID+`&apikey=`+APIKEY);
         console.log("________Resultados________"+resultadosDelTest);

         if(resultadosDelTest != undefined){
            returnObject.respuesta = resultadosDelTest.Response;
            returnObject.datos = resultadosDelTest;
            returnObject.cantidadTotal = 1;

         }

    }catch(error){
        console.log(error);
        
    }

  return returnObject;

};

const Test = async (searchText) => {
    
    const apiResponse = await axios.get(searchText);
  
    return apiResponse.data;
  
  };

export {OMDBSearchByPage, OMDBSearchComplete, OMDBGetByImdbID};