//Encargado de realizar las operaciones en la BD

//IMPORTAR EL MODELO DE DATOS PARA PDOER OPERAR EN BD
const ReservaModelo = require('../models/ReservaModelo')

//1. Funcion para insertar datos
async function insertarReserva(datos) {

    let jugadorNuevo = new ReservaModelo(datos)
    return await jugadorNuevo.save()

}

//2. Funcion para buscar 1 Jugador
async function leerReserva(id) {

    let jugadorBuscado = await ReservaModelo.findById(id)
    return jugadorBuscado

}

//3. Funcion para buscar TODOS los Jugadores
async function leerReservaes() {

    let jugadoresBuscados = await ReservaModelo.find()
    return jugadoresBuscados

}

//4. Funcion para eliminar un jugador
async function borrarReserva(id) {

    return await ReservaModelo.findByIdAndDelete(id)

}

//5. Funcion para editar un jugador
async function modificarReserva(id, datos) {

    return await ReservaModelo.findByIdAndUpdate(id, datos)

}

module.exports = {

    insertarReserva,
    leerReserva,
    leerReservaes,
    borrarReserva,
    modificarReserva
}