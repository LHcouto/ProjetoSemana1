const route = require('express').Router();
const controllerComputadores = require('../controllers/computador.controller');

route.get(
  '/todos-computadores',
  controllerComputadores.findAllComputadoresController,
);
route.get(
  '/computador/:id',
  controllerComputadores.findByIdComputadorController,
);
route.post('/create', controllerComputadores.createComputadorController);
route.put('/update/:id', controllerComputadores.updateComputadorController);
route.delete('/delete/:id', controllerComputadores.deleteComputadorController);

module.exports = route;
