const express = require('express');
const cors = require('cors');

const port = 3000;
const app = express();

// Configurando nossa aplicação para trabalhar com JSON's
app.use(express.json());
app.use(cors());
// Definir dados para usar na aplicação
const computadores = [
  {
    id: 1,
    nome: 'Computador Gamer Uller',
    descricao: 'NTEL I5-3470, GEFORCE GTX 1650 4GB, 8GB DDR3, SSD 240GB',
    foto: 'assets/img/computador1.png',
    preco: 3.470,
  },
  {
    id: 2,
    nome: 'Computador Gamer Bonnacon',
    descricao: 'INTEL I5-3470, RADEON RX 550 4GB, 8GB DDR3, SSD 240GB',
    foto: 'https://storage.googleapis.com/domain-images/60b1f285-d77c-444a-b734-1bc1efd2c472/products/gallery_bd17d9a3-cd93-44a9-9b44-f017a1c7a329.jpg',
    preco: 2.722,
  },
  {
    id: 3,
    sabor: 'Computador Gamer Zagan',
    descricao: 'INTEL I5-3470, GEFORCE GT 1030 2GB, 8GB DDR3, SSD 240GB',
    foto: 'https://storage.googleapis.com/domain-images/60b1f285-d77c-444a-b734-1bc1efd2c472/products/gallery_bd17d9a3-cd93-44a9-9b44-f017a1c7a329.jpg',
    preco: 2.495,
  },
  {
    id: 4,
    sabor: 'Computador Gamer Arcadia',
    descricao: 'NTEL I5-3570, RADEON RX 550 4GB, 8GB DDR3, SSD 240GB',
    foto: 'https://storage.googleapis.com/domain-images/60b1f285-d77c-444a-b734-1bc1efd2c472/products/gallery_bd17d9a3-cd93-44a9-9b44-f017a1c7a329.jpg',
    preco: 2.719,
  },
];
//get all
app.get('/computadores/todos-computadores', (req, res) => {
  res.send(computadores);
});
//get by id
app.get('/computadores/computador/:id', (req, res) => {
  const parametroId = Number(req.params.id);
  const escolhaComputador = computadores.find(
    (computador) => computador.id === parametroId,
  );
  res.send(escolhaComputador);
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port} 🚀`);
});
