const fs = require("fs");
const http = require("http");
const path = require("path");
const os = require("os");
const _ = require("lodash");

const a = [1, 2, 4, 6, 8];
const b = [2, 6, 9, 10, 12];

const diffa = _.difference(a, b);
const diffb = _.difference(b, a);
console.log(diffa);
console.log(diffb);

// console.log(os.cpus());
console.log(os.freemem());
console.log(os.homedir());
console.log(os.type());

const customPath = '/aulas/programacao/rocketseat/nodejs/node_teste.js';

console.log(path.dirname(customPath));
console.log(path.basename(customPath));

!fs.existsSync('./minha_pasta')
  ? (
    console.log("Pasta não existe"),
    fs.mkdirSync('./minha_pasta')
  )
  : console.log("Pasta já existe");

const novoArquivo = "novo-arquivo.txt";

fs.rename('arquivo.txt', novoArquivo, (error) => {
  error
    ? console.error(error)
    : console.log(`Arquivo renomeado com sucesso para ${novoArquivo}`);
});

const arquivoDeTeste = "novo-arquivo.txt";

fs.stat(arquivoDeTeste, (error, stats) => {
  error
    ? console.log(error)
    : (
      console.log(stats.isFile()),
      console.log(stats.isDirectory()),
      console.log(stats.isSymbolicLink()),
      console.log(stats.size),
      console.log(stats.birthtime)
    );
})

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');

  const name = "Ricardo!!";
  res.end(`<h1>Olá ${name}</h1>`);
});

server.listen(3000, () => {
  console.log("Servidor rodando na porta 3000!!");
});