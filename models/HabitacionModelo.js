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
        type: String,
        require: true
    },

    precioAdultoPorNoche:{
        type: Number,
        require: true
    },

    PrecioNinoPorNoche:{
        type: Number,
        require: true
    }

})

module.exports = model('resrvas' , ReservaModelo)