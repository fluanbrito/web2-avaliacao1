const express = require('express');
const fetch = require('node-fetch');
const app = express();

app.use(express.json());

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});

const turmas = [
    {
      psw2: [
        { nome: 'Ana', media: 8.1 },
        { nome: 'Beatriz', media: 3.4 },
        { nome: 'Hugo', media: 9.5 },
        { nome: 'Marcos', media: 6.2 },
      ],
    },
    {
      psw1: [
        { nome: 'Camila', media: 5.1 },
        { nome: 'Diogo', media: 7.9 },
        { nome: 'Paulo', media: 5.8 },
        { nome: 'Tereza', media: 2.4 },
      ],
    },
  ];

app.get('/estatisticaNotas', (req, res) => {
  let countPSW1 = 0;
  let countPSW2 = 0;
  let alunosPSW1 = [];
  let alunosPSW2 = [];

  turmas.forEach((turma) => {
    Object.entries(turma).forEach(([turma, alunos]) => {
      alunos.forEach((aluno) => {
        if (aluno.media >= 7.0) {
          if (turma === 'psw1') {
            countPSW1++;
            alunosPSW1.push(aluno.nome);
          } else if (turma === 'psw2') {
            countPSW2++;
            alunosPSW2.push(aluno.nome);
          }
        }
      });
    });
  });

  res.json({
    quantidadePSW1: countPSW1,
    alunosPSW1,
    quantidadePSW2: countPSW2,
    alunosPSW2,
  });
});

app.get('/frequenciaNome/:nome', async (req, res) => {
  const nome = req.params.nome;

  try {
    const response = await fetch(`https://servicodados.ibge.gov.br/api/v2/censos/nomes/${nome}`);
    const data = await response.json();

    if (data.length === 0) {
      res.status(404).json({ mensagem: 'Nome não encontrado' });
      return;
    }

    const frequencia = data[0].res.filter((item) => item.periodo === '2000' || item.periodo === '2010');
    res.json({ frequencia });
  } catch (error) {
    res.status(500).json({ mensagem: 'Erro ao buscar frequência do nome' });
  }
});

const redacaoEnem = [
  { nome: 'Joao', media: 851 },
  { nome: 'Diego', media: 905 },
  { nome: 'Davi', media: 912 },
  { nome: 'Patricia', media: 848 },
];

app.post('/redacaoEnem', (req, res) => {
  const novaNota = req.body;

  redacaoEnem.push(novaNota);

  const maiorNota = redacaoEnem.reduce((maior, atual) => {
    return atual.media > maior.media ? atual : maior;
  });

  res.json({ maiorNota });
});

fetch('http://localhost:3000/redacaoEnem', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ nome: 'Julia', media: 960 })
})
.then(response => response.json())
.then(data => console.log(data));
