

export default class Alumno {
    constructor(DNI, username = "", edad = "") { // edad tiene un valor default.
    this.username = username;
    this.DNI = DNI;
    this.edad = edad;

    }

    toString(){
    return `nombre:${this.nombre}, DNI:${this.casado}`;
    }
    }