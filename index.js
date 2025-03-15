import fs from "fs";
import chalk from "chalk";
import inquirer from "inquirer";

console.log("Iniciando o projeto: Account");

function operation() {
  inquirer.prompt([{
    type: 'list',
    name: 'action',
    message: 'O que você deseja fazer?',
    choices: ['Criar uma conta', 'Consultar saldo', 'Depositar', 'Sacar', 'Sair'],
  }])
    .then(response => {
      switch (response.action) {
        case 'Criar uma conta':
          createAccount();
          break;
      }
    })
    .catch(error => console.log(error));
};
operation();

function createAccount() {
  console.log(chalk.bgGreen.black("Parabéns por escolher o nosso banco!"));
  console.log(chalk.green("Defina as opções da sua conta a seguir!"));
}