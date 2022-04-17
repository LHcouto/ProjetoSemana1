const route = require('express').Router();
const controllerComputadores = require('../controllers/computador.controller')

route.get('/todos-computadores', controllerComputadores.findAllComputadoresController);
route.get('/computador/:id', controllerComputadores.findByIdComputadorController);

module.exports = route;
