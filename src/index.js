

import express from "express"; // hacer npm i express
import cors from "cors"; // hacer npm i cors

import Alumno from "./models/alumno.js"
import {sumar, restar, multiplicar, dividir} from "./modules/matematica.js"
import {OMDBSearchByPage, OMDBSearchComplete, OMDBGetByImdbID} from "./modules/OMDBWrapper.js"

const app = express();
const port = 3000; // El puerto 3000 (http://localhost:3000)


// Agrego los Middlewares
app.use(cors()); // Middleware de CORS
app.use(express.json()); // Middleware para parsear y comprender JSON



    

// Aca pongo todos los EndPoints

//Comunes

app.get('/', (req, res) => { // EndPoint "/"
    res.status(200).json('¡Ya estoy respondiendo!');
})
app.get('/saludar/:nombre', (req, res) => { // EndPoint "/saludar"
    res.status(200).json(`Hola ${req.params.nombre}`);
})


app.get('/validarfecha/:anio/:mes/:dia', (req, res) => { // EndPoint "/validarfecha"

    if(Number.isNaN(Date.parse(new Date(req.params.mes, req.params.dia, req.params.anio)))){
        res.sendStatus(400);
    }else{
        res.sendStatus(200);
    }

})//Valida que sean números, nada más (se puede poner como mes 13 y tira OK)
    

//Matemática

app.get('/matematica/sumar', (req, res) => {
    let n1 =  req.query.n1;
    let n2 =  req.query.n2;

    let resultado = sumar(n1, n2);
    let statusCode = 200;
    if(isNaN(resultado))
    statusCode = 400;
    
    res.status(statusCode).json('Resultado: '+ resultado);

})

app.get('/matematica/restar', (req, res) => {
    let n1 =  req.query.n1;
    let n2 =  req.query.n2;
    res.status(200).json('Resultado: '+ restar(n1, n2));

})

app.get('/matematica/multiplicar', (req, res) => {
    let n1 =  req.query.n1;
    let n2 =  req.query.n2;
    res.status(200).json('Resultado: '+ multiplicar(n1, n2));
})

app.get('/matematica/dividir', (req, res) => {
    let n1 =  req.query.n1;
    let n2 =  req.query.n2;
    let resultado = dividir(n1, n2);
    let statusCode = 200;
    if(isNaN(resultado))
    statusCode = 400;
    
    res.status(statusCode).json('Resultado: '+ resultado);
})

//modulo OMDBWrapper

app.get('/omdb/searchbypage', async(req, res) => {
    let texto =  req.query.search;
    let pagina =  req.query.p;
    let respuesta = await OMDBSearchByPage(texto,pagina);
    res.status(200).json(respuesta);
})

app.get('/omdb/searchcomplete', async(req, res) => {
    let texto =  req.query.search;
    let respuesta = await OMDBSearchComplete(texto);
    res.status(200).json(respuesta);
})

app.get('/omdb/getbyomdbid', async(req, res) => {
    let imdb =  req.query.imdbID;
    let respuesta = await OMDBGetByImdbID(imdb);
    res.status(200).json(respuesta);
})

//clase Alumno

const alumnosArray = [];
alumnosArray.push(new Alumno("22888444", "Esteban Dido" , 20));
alumnosArray.push(new Alumno("28946255", "Matias Queroso",  51));
alumnosArray.push(new Alumno("32623391", "Elba Calao" , 18));

app.get('/alumnos', (req, res) => {
    res.status(200).json(alumnosArray);

})


app.get('/alumnos/:dni', (req, res) => {

    const posDelAlumnoEnArray = alumnosArray.findIndex(Alumno.DNI(req.params.dni)); //Está bien hecha la referencia así
    if(posDelAlumnoEnArray != -1){
        res.status(200).json(alumnosArray[posDelAlumnoEnArray]);
    }else{
        res.sendStatus(404);
    }
})


app.post('/alumnos', (req, res) => {
    let alumnoRecibido = req.body;
    alumnosArray.push(alumnoRecibido);
    res.sendStatus(201);

})

app.delete('/alumnos', (req, res) => {
    let dni = req.body;
    alumnosArray.indexOf(alumnoRecibido);
    res.sendStatus(201);

})

// Inicio el Server y lo pongo a escuchar.
//Tiene que estar abajo de todo para que todos los endpoints se puedan llamar!!!! 
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})