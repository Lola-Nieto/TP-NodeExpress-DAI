import {OMDBSearchByPage, OMDBSearchComplete, OMDBGetByImdbID} from './modules/OMDBWrapper.js'


let resultado = null;


resultado  = await OMDBGetByImdbID("tt0317219");

console.log("OMDBSearchByPage", resultado);


