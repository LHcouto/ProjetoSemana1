const computadoresService = require('../services/computador.service');

const findAllComputadoresController = (req, res) => {
  const computadores = computadoresService.findAllComputadoresService();
  res.send(computadores);
};

const findByIdComputadorController = (req, res) => {
  const parametroId = Number(req.params.id);
  const escolhaComputador =
    computadoresService.findByIdComputadoresService(parametroId);
  res.send(escolhaComputador);
};

const createComputadorController = (req, res) => {
  const computador = req.body;
  const newComputador = computadoresService.createComputadorService(computador);
  res.send(newComputador);
};

const updateComputadorController = (req, res) => {
  const idParam = Number(req.params.id);
  const computadorEdit = req.body;
  const updatedComputador = computadoresService.updateComputadorService(
    idParam,
    computadorEdit,
  );
  res.send(updatedComputador);
};

const deleteComputadorController = (req, res) => {
  const idParam = req.params.id;
  computadoresService.deleteComputadorService(idParam);
  res.send({ message: 'Computador deletado com sucesso!' });
};

module.exports = {
  findAllComputadoresController,
  findByIdComputadorController,
  createComputadorController,
  updateComputadorController,
  deleteComputadorController,
};
