const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const routes = require('./network/routes');
const initialsetup = require('../src/libraries/initialsetup');

//Definicion del servidor express
const server = express();
initialsetup.crearPerfiles();

//Aplicacion de los middlewares
//Cors
server.use(cors());
//Lectura y parseo del body json
server.use(express.json());
//Escribe las request en la consola del servidor
server.use(morgan('dev'));

/**
 * Componente encargado de enrutar
 * las solicitudes que ingresan al servidor 
 */
routes(server)

module.exports = server