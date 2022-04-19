const route = require('express').Router();
const computadoresController = require('../controllers/computador.controller');

route.get(
  '/todos-computadores',
  computadoresController.findAllComputadoresController,
);
route.get(
  '/computador/:id',
  computadoresController.findByIdComputadorController,
);
route.post('/create', computadoresController.createComputadorController);
route.put('/update/:id', computadoresController.updateComputadorController);
route.delete('/delete/:id', computadoresController.deleteComputadorController);

module.exports = route;
