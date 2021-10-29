const {model, Schema} = require('mongoose')

const ReservaModelo = Schema({

    nombreCliente:{
        type: String,
        require: true
    },

    apellidoCliente:{
        type: String,
        require: true
    },

    telefonoCliente:{
        type: Date,
        require: true
    },

    fechaInicioReserva:{
        type: Date,
        require: true
    },

    fechaFinalReserva:{
        type: String,
        require: true
    },

    numeroDePersonas:{
        type: Number,
        require: true
    }
})
module.exports = model('resrvas' , ReservaModelo)