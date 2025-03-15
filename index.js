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
        case 'Consultar saldo':
          checkBalance();
          break;
        case 'Depositar':
          deposit();
          break;
        case 'Sacar':
          withdraw();
          break;
        case 'Sair':
          console.log(chalk.red('Até mais!'));
          break;
        default:
          console.log(chalk.red('Opção inválida'));
          break;
      }
    })
    .catch(error => console.log(error));
};

operation();