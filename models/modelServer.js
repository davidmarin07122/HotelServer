const express = require('express')

const { conectarBD } = require('../database/conexion.js')

const rutas = require('../routes/rutas.js')

class modelServer {

constructor(){

    this.app = express();
    this.despertarBD();
    this.llamarAuxiliares();
    this.enrutarPeticiones();
}

despertarServidor(){

    this.app.listen(process.env.PORT, function(){
        console.log("servidor encendido:  " + process.env.PORT);
    })
}

enrutarPeticiones(){
    this.app.use("/", rutas);
}

despertarBD(){

    conectarBD()
}

llamarAuxiliares(){
    this.app.use(express.json())
}

}
module.exports = modelServer
