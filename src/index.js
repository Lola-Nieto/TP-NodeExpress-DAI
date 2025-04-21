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




// Inicio el Server y lo pongo a escuchar.
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
    })
    

// Aca pongo todos los EndPoints

//Comunes

app.get('/', (req, res) => { // EndPoint "/"
    res.send('¡Ya estoy respondiendo!');
    //res.status(200).json({'OK'});
})
app.get('/saludar/:nombre', (req, res) => { // EndPoint "/saludar"
    res.send(`Hola ${req.params.nombre}`);
    res.sendStatus(200); //No sale nada
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
    res.send('Resultado: '+ resultado);

    if(isNaN(resultado)){
        res.sendStatus(400);
    }else{
        res.sendStatus(200);

    }

})


app.get('/matematica/restar', (req, res) => {
    let n1 =  req.query.n1;
    let n2 =  req.query.n2;
    res.send('Resultado: '+ restar(n1, n2));
    res.sendStatus(200);
})

app.get('/matematica/multiplicar', (req, res) => {
    let n1 =  req.query.n1;
    let n2 =  req.query.n2;
    res.send('Resultado: '+ multiplicar(n1, n2));
    res.sendStatus(200);
})

app.get('/matematica/dividir', (req, res) => {
    let n1 =  req.query.n1;
    let n2 =  req.query.n2;
    let resultado = dividir(n1, n2);
    res.send('Resultado: '+ resultado);
    if(isNaN(resultado)){
        res.sendStatus(400);
    }else{
        res.sendStatus(200);

    }

})