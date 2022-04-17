const computadores = [
  {
    id: 1,
    nome: 'Computador Gamer Uller',
    descricao: 'NTEL I5-3470, GEFORCE GTX 1650 4GB, 8GB DDR3, SSD 240GB',
    foto: './assets/img/computador1.png',
    preco: 3.475,
  },
  {
    id: 2,
    nome: 'Computador Gamer Bonnacon',
    descricao: 'INTEL I5-3470, RADEON RX 550 4GB, 8GB DDR3, SSD 240GB',
    foto: './assets/img/computador2.png',
    preco: 2.722,
  },
  {
    id: 3,
    nome: 'Computador Gamer Zagan',
    descricao: 'INTEL I5-3470, GEFORCE GT 1030 2GB, 8GB DDR3, SSD 240GB',
    foto: './assets/img/computador3.png',
    preco: 2.495,
  },
  {
    id: 4,
    nome: 'Computador Gamer Garm',
    descricao: 'AMD ATHLON 3000G, GEFORCE GTX 1650 4GB, 8GB DDR4, SSD 240GB',
    foto: './assets/img/computador4.png',
    preco: 3.396,
  },
];

const findAllComputadoresService = () => {
  return computadores;
};

const findByIdComputadoresService = (parametroId) => {
  return computadores.find((computador) => computador.id === parametroId);
};

const createComputadorService = (newComputador) => {
  const newId = computadores.length + 1;
  newComputador.id = newId;
  computadores.push(newComputador);
  return newComputador;
};

const updateComputadorService = (id, computadorEdited) => {
  computadorEdited['id'] = id;
  const computadorIndex = computadores.findIndex(
    (computador) => computador.id == id,
  );
  computadores[computadorIndex] = computadorEdited;
  return computadorEdited;
};

const deleteComputadorService = (id) => {
  const computadorIndex = computadores.findIndex(
    (computador) => computador.id == id,
  );
  return computadores.splice(computadorIndex, 1);
};

module.exports = {
  findAllComputadoresService,
  findByIdComputadoresService,
  createComputadorService,
  updateComputadorService,
  deleteComputadorService,
};
