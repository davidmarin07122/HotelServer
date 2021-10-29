const {model, Schema} = require('mongoose')

const ReservaModelo = Schema({

    nombreHabitacion:{
        type: String,
        require: true
    },

    fotoHabitacion:{
        type: String,
        require: true
    },

    descripcion:{
        type: Date,
        require: true
    },

    precioAdultoPorNoche:{
        type: Date,
        require: true
    },

    PrecioNinoPorNoche:{
        type: String,
        require: true
    }

})

module.exports = model('resrvas' , ReservaModelo)