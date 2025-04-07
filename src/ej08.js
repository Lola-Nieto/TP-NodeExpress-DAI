import {OMDBSearchByPage, OMDBSearchComplete, OMDBGetByImdbID} from './modules/OMDBWrapper.js'


let resultado = null;


resultado  = await OMDBGetByImdbID("tt0317219");
console.log("OMDBGetByImdbID", resultado);



resultado  = await OMDBSearchComplete("Cars");
console.log("OMDBSearchComplete", resultado);



resultado  = await OMDBSearchByPage("Cars", 1);
console.log("OMDBSearchByPage", resultado);
