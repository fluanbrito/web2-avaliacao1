# WEB2 AVALIAÇÃO

## QUESTÃO

### A) 

Ter uma rota GET para '/estatisticaNotas', que retorne a quantidade de alunos com média maior ou igual a 7.0. Use o JSON abaixo para a busca: 
```bash
const turmas = [
    {
        psw2: [
            {nome: 'Ana', media: 8.1},
            {nome: 'Beatriz', media: 3.4},
            {nome: 'Hugo', media: 9.5},
            {nome: 'Marcos', media: 6.2},
        ]
    },
    {
        psw1: [
            {nome: 'Camila', media: 5.1},
            {nome: 'Diogo', media: 7.9},
            {nome: 'Paulo', media: 5.8},
            {nome: 'Tereza', media: 2.4},
        ]
    }
]
```

### B)

Ter uma rota GET para ‘/frequenciaNome/:nome’ que retorne a frequência do nome passado em ‘:nome’ na população do Brasil no período 2000 até 2010. 

Para a consulta, use a API do IBGE ‘https://servicodados.ibge.gov.br/api/v2/censos/nomes/:nome’  


### C)

Ter uma rota POST para ```‘/redacaoEnem’``` que cadastre novas notas em array mockado e receba como retorno a maior nota até o momento. Lembre de habilitar o middleware JSON no express. Como dados mockados use: 

```bash
var redacaoEnem = [
    {nome: 'Joao', media: 851},
    {nome: 'Diego', media: 905},
    {nome: 'Davi', media: 912},
    {nome: 'Patricia', media: 848},
],
```

Um exemplo de nova nota seria: 
```bash
{nome: 'Julia', media: 760},
```
 

Após essa nota ser inserida no array, a resposta para o usuário seria: 
```bash
{maiorNota: {nome: 'Davi', media: 912}}
```

## ⚙️ EXECUTE:

```node index.js```

## ✔️ ACESSE:

A) GET - http://localhost:3000/estatisticaNotas

B) GET - http://localhost:3000/frequenciaNome/:nome

C) POST - ```node index.js```

