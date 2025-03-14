const fs = require("fs");
const http = require("http");

const novoArquivo = "novo-arquivo.txt";

fs.rename('arquivo.txt', 'novo-arquivo.txt', (error) => {
  error
    ? console.error(error)
    : console.log(`Arquivo renomeado com sucesso para ${novoArquivo}`);
});

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');

  const name = "Ricardo Cardoso!!";

  res.end(`<h1>Olá ${name}</h1>`);
});

server.listen(3000, () => {
  console.log("Servidor rodando na porta 3000!!");
});