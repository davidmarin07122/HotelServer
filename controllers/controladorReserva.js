const {request, response } = require('express');

function registrarReserva(peticion = request, respuesta = response) {
    
    //datos a recibir
    let datosPeticion = peticion.body;

    respuesta.json({
        mensaje:"reserva registrada..",
        datos:datosPeticion
    })
    
}

function consultarReservas(peticion=request, respuesta=response) {
    respuesta.json({
        mensaje:"buscado todo los juagdores..."
    })
}

function consultarReserva(peticion=request, respuesta=response) {

    //resibir el id a buscar
    let id = peticion.params.id;

    respuesta.json({
        mensaje:"buscado..." + id
    })
}

function editarReserva(peticion=request, respuesta=response) {

    let id = peticion.params.id;

    respuesta.json({
        mensaje:"editando..." +id
    })
}
function eliminarReserva(peticion=request, respuesta=response) {
    
    let id = peticion.params.id;
    
    respuesta.json({
        mensaje:"eliminando..."
    })
}

module.exports={

    registrarReserva,
    consultarReserva,
    consultarReservas,
    editarReserva,
    eliminarReserva

}


