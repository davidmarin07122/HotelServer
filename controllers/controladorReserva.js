const e = require('express');
const {request, response } = require('express');

const{ insertarReserva } = require ('../services/serviceHabitacion.js')
const{ leerReserva } = require ('../services/serviceHabitacion.js')
const{ leerHaReservas } = require ('../services/serviceHabitacion.js')
const{ borrarReserva } = require ('../services/serviceHabitacion.js')
const{ modificarReserva } = require ('../services/serviceHabitacion.js');
const { leerReservaes } = require('../services/serviceReserva.js');

function registrarReserva(peticion = request, respuesta = response) {
    
    //datos a recibir
    try {
        
        let datosPeticion = peticion.body;

        await insertarReserva(datosPeticion)
        respuesta.status(200).json({
            estado: true,
            mensaje: "Exito registrando la reserva"
        })
    } catch (error) {
        respuesta.status(400).json({
            estado: false, 
            mensaje: "Error..." + error
        })
    }
    
}

async function consultarReservas(peticion=request, respuesta=response) {
    
    try {
        
        let havitaciones = await leerReservaes()

        respuesta.status(200).json({
            estado: true,
            mensaje: havitaciones
        })

    } catch (error) {
        respuesta.status(400).json({
            estado: false,
            mensaje: "Error" + error
        })
    }
}

async function consultarReserva(peticion=request, respuesta=response) {

    try {
        //resibir el id a buscar
        let id = peticion.params.id;
    
        let havitacion = await leerReserva(id)
    
        respuesta.status(200).json({
            estado: true,
            mensaje:"buscado..." + id
        })
    
    } catch (error){
        respuesta.status(400).json({
            estado: false,
            mensaje:"Error" + error
        })
    
    }
}

async function editarReserva(peticion=request, respuesta=response) {

    try {

        let id = peticion.params.id
        let datosPeticion = peticion.body

        await modificarReserva(id, datosPeticion)

        respuesta.status(200).json({
            estado: true,
            mensaje: "Exito editando la havitacion"
        })


    } catch (error) {
        respuesta.status(400).json({
            estado: false,
            mensaje: "Upss... tenemos un problema: " + error
        })
    }
}
function eliminarReserva(peticion=request, respuesta=response) {
    
    try {

        let id = peticion.params.id

        await borrarReserva(id)

        respuesta.status(200).json({
            estado: true,
            mensaje: "Exito al borrar la havitacion"
        })


    } catch (error) {
        respuesta.status(400).json({
            estado: false,
            mensaje: "Upss... tenemos un problema: " + error
        })
    } 
}

module.exports={

    registrarReserva,
    consultarReserva,
    consultarReservas,
    editarReserva,
    eliminarReserva

}


