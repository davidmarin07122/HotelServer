const { Router } = require('express');

//RESERVAS
const {registrarReserva}= require('../controllers/controladorReserva.js')
const {consultarReservas}= require('../controllers/controladorReserva.js')
const {consultarReserva}= require('../controllers/controladorReserva.js')
const {editarReserva}= require('../controllers/controladorReserva.js')
const {eliminarReserva}= require('../controllers/controladorReserva.js')

//HABITACIONES
const {registrarHabitacion}= require('../controllers/controladorHabitacion.js')
const {consultarHabitaciones}= require('../controllers/controladorHabitacion.js')
const {consultarHabitacion}= require('../controllers/controladorHabitacion.js')
const {editarHabitacion}= require('../controllers/controladorHabitacion.js')
const {eliminarHabitacion}= require('../controllers/controladorHabitacion.js')

const rutas = Router();

//RESERVAS
rutas.post('/avanzada/v1/reserva',registrarReserva)

rutas.get('/avanzada/v1/reserva',consultarReservas)

rutas.get('/avanzada/v1/reserva/:id',consultarReserva)

rutas.put('/avanzada/v1/reserva/:id',editarReserva)

rutas.delete('/avanzada/v1/reserva/:id',eliminarReserva)


//HABITACIONES
rutas.post('/avanzada/v1/habitacion',registrarHabitacion)

rutas.get('/avanzada/v1/habitacion',consultarHabitaciones)

rutas.get('/avanzada/v1/habitacion/:id',consultarHabitacion)

rutas.put('/avanzada/v1/habitacion/:id',editarHabitacion)

rutas.delete('/avanzada/v1/habitacion/:id',eliminarHabitacion)

module.exports = rutas