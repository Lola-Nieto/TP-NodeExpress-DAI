import Alumno from "./models/alumno.js"
import {sumar, restar, multiplicar, dividir} from "./modules/matematica.js"
import {OMDBSearchByPage, OMDBSearchComplete, OMDBGetByImdbID} from "./modules/OMDBWrapper.js"


import express from "express"; // hacer npm i express
import cors from "cors"; // hacer npm i cors
const app = express();
const port = 3000; // El puerto 3000 (http://localhost:3000)

// Agrego los Middlewares
app.use(cors()); // Middleware de CORS
app.use(express.json()); // Middleware para parsear y comprender JSON

// Aca pongo todos los EndPoints
app.get('/', (req, res) => { // EndPoint "/"
    res.send('¡Ya estoy respondiendo!');
    //res.status(200).json({'OK'});
})
app.get('/saludar/:nombre', (req, res) => { // EndPoint "/saludar"
    res.send(`Hola ${req.params.nombre}`);
    res.sendStatus(200); //Sale el estado y un mensaje (OK?)
})
app.get('/validarfecha/:anio/:mes/:dia', (req, res) => { // EndPoint "/validarfecha"
    
    if(Date.parse(req.params.mes + req.params.dia + req.params.anio) != isNaN){
        res.sendStatus(200); //Sale el estado y un mensaje (OK?)
    }else{
        res.sendStatus(400);
    }

})
    

// Inicio el Server y lo pongo a escuchar.
app.listen(port, () => {
console.log(`Example app listening on port ${port}`)
})
