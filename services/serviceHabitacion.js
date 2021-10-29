//Encargado de realizar las operaciones en la BD

//IMPORTAR EL MODELO DE DATOS PARA PDOER OPERAR EN BD
const HabitacionModelo = require('../models/HabitacionModelo')


//1. Funcion para insertar datos
async function insertarHabitacion(datos) {

    let jugadorNuevo = new HabitacionModelo(datos)
    return await jugadorNuevo.save()

}

//2. Funcion para buscar 1 Jugador
async function leerHabitacion(id) {

    let jugadorBuscado = await HabitacionModelo.findById(id)
    return jugadorBuscado

}

//3. Funcion para buscar TODOS los Jugadores
async function leerHabitaciones() {

    let jugadoresBuscados = await HabitacionModelo.find()
    return jugadoresBuscados

}

//4. Funcion para eliminar un jugador
async function borrarHabitacion(id) {

    return await HabitacionModelo.findByIdAndDelete(id)

}

//5. Funcion para editar un jugador
async function modificarHabitacion(id, datos) {

    return await HabitacionModelo.findByIdAndUpdate(id, datos)

}

module.exports = {

    insertarHabitacion,
    leerHabitacion,
    leerHabitaciones,
    borrarHabitacion,
    modificarHabitacion
}