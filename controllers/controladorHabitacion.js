const {request, response } = require('express');

function registrarHabitacion(peticion = request, respuesta = response) {
    
    //datos a recibir
    let datosPeticion = peticion.body;

    respuesta.json({
        mensaje:"Habitacion registrada..",
        datos:datosPeticion
    })
    
}

function consultarHabitaciones(peticion=request, respuesta=response) {
    respuesta.json({
        mensaje:"buscado todo los juagdores..."
    })
}

function consultarHabitacion(peticion=request, respuesta=response) {

    //resibir el id a buscar
    let id = peticion.params.id;

    respuesta.json({
        mensaje:"buscado..." + id
    })
}

function editarHabitacion(peticion=request, respuesta=response) {

    let id = peticion.params.id;

    respuesta.json({
        mensaje:"editando..." +id
    })
}
function eliminarHabitacion(peticion=request, respuesta=response) {
    
    let id = peticion.params.id;
    
    respuesta.json({
        mensaje:"eliminando..."
    })
}

module.exports={

    registrarHabitacion,
    consultarHabitacion,
    consultarHabitaciones,
    editarHabitacion,
    eliminarHabitacion

}


