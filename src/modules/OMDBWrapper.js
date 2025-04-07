import axios from "axios";
const APIKEY  = "b8b3928a";        // Poné tu APIKEY, esta no funciona.


const OMDBSearchByPage = async (searchText, page = 1) => {

  let returnObject = {

      respuesta     : false,

      cantidadTotal : 0,

      datos         : []

    };


  // No seas vago, acá hay que hacer el cuerpo de la función!!!

  return returnObject;

};


const OMDBSearchComplete = async (searchText) => {

  let returnObject = {

      respuesta     : false,

      cantidadTotal : 0,

      datos         : []

    };


  // No seas vago, acá hay que hacer el cuerpo de la función!!!

  return returnObject;

};


const OMDBGetByImdbID = async (imdbID) => {

    let rta = await Test(`http://www.omdbapi.com/?i=imdbID&apikey=APIKEY `);


    let returnObject = {

      respuesta     : false,

      cantidadTotal : 0,

      datos         : {}

    }
    

  return returnObject;

};

const Test = async (searchText) => {
    
    const requestString = ``;
  
    const apiResponse = await axios.get(requestString);
  
    return apiResponse.data;
  
  };

export {OMDBSearchByPage, OMDBSearchComplete, OMDBGetByImdbID};