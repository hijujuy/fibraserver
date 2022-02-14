const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const router = require('./network/router')

//Definicion del servidor express
const server = express()

//Aplicacion de los middlewares
//Cors
server.use(cors())
//Lectura y parseo del body json
server.use(express.json())
//Escribe las request en la consola del servidor
server.use(morgan('dev'))

/**
 * Componente encargado de recibir 
 * las solicitudes que ingresan al servidor 
 */
//router(server)

module.exports = server