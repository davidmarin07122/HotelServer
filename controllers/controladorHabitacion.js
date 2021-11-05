const e = require('express');
const {request, response } = require('express');

const{ insertarHabitacion } = require ('../services/serviceHabitacion.js')
const{ leerHabitacion } = require ('../services/serviceHabitacion.js')
const{ leerHabitaciones } = require ('../services/serviceHabitacion.js')
const{ borrarHabitacion } = require ('../services/serviceHabitacion.js')
const{ modificarHabitacion } = require ('../services/serviceHabitacion.js')

async function registrarHabitacion(peticion = request, respuesta = response) {
    
    try {
        
        let datosPeticion = peticion.body;

        await insertarHabitacion(datosPeticion)
        respuesta.status(200).json({
            estado: true,
            mensaje: "Exito registrando la havitacion"
        })
    } catch (error) {
        respuesta.status(400).json({
            estado: false, 
            mensaje: "Error..." + error
        })
    }
    
}

async function consultarHabitaciones(peticion=request, respuesta=response) {
    
    try {
        
        let havitaciones = await leerHabitaciones()

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

async function consultarHabitacion(peticion=request, respuesta=response) {

    try {
    //resibir el id a buscar
    let id = peticion.params.id;

    let havitacion = await leerHabitacion(id)

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

async function editarHabitacion(peticion=request, respuesta=response) {

    try {

        let id = peticion.params.id
        let datosPeticion = peticion.body

        await modificarHabitacion(id, datosPeticion)

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



async function eliminarHabitacion(peticion=request, respuesta=response) {
    
    try {

        let id = peticion.params.id

        await borrarHabitacion(id)

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

    registrarHabitacion,
    consultarHabitacion,
    consultarHabitaciones,
    editarHabitacion,
    eliminarHabitacion

}


