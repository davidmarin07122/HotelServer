require ('dotenv').config()

//importo el servidor modelo
const Servidormodelo = require('./models/modelServer.js')

const servidorHotel = new Servidormodelo()

servidorHotel.despertarServidor()
