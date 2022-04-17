const computadoresService = require('../services/computador.service');

const findAllComputadoresController = (req, res) =>{
      const computadores = computadoresService.findAllComputadoresService();
      res.send(computadores);
};

const findByIdComputadorController = (req, res) =>{
    const parametroId = Number(req.params.id);
    const escolhaComputador = computadoresService.findByIdComputadoresService(parametroId);
    res.send(escolhaComputador);
}

module.exports = {
    findAllComputadoresController,
    findByIdComputadorController,
}

