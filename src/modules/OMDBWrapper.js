import axios from "axios";
const APIKEY  = "b8b3928a";        // Poné tu APIKEY, esta no funciona.


const OMDBSearchByPage = async (movieTitle, page = 1) => {
    let returnObject = {

        respuesta     : false,
  
        cantidadTotal : 0,
  
        datos         : []
  
      };


    try{
        let resultadosDelTest = await Test(`http://www.omdbapi.com/?apikey=${APIKEY}&s=${movieTitle}&page=${page}`);

        if(resultadosDelTest != undefined){
            returnObject.datos = resultadosDelTest.data.Search;
            returnObject.respuesta = resultadosDelTest.data.Response;
            returnObject.cantidadTotal = resultadosDelTest.data.totalResults;
            
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
         let resultadosDelTest = await Test(`http://www.omdbapi.com/?apikey=`+APIKEY+`&s=`+movieTitle);
         if(resultadosDelTest != undefined){
            
         returnObject.respuesta = resultadosDelTest.data.Response;
         returnObject.cantidadTotal = resultadosDelTest.data.totalResults;
         returnObject.datos = resultadosDelTest.data.Search;
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
         console.log(resultadosDelTest);

         if(resultadosDelTest != undefined){
            returnObject.respuesta = resultadosDelTest.Response;
            returnObject.datos = resultadosDelTest.Search;
            returnObject.cantidadTotal = resultadosDelTest.data.totalResults;

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