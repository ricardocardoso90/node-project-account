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

          break;

        case 'Depositar':
          deposit();
          break;

        case 'Sacar':

          break;

        case 'Sair':
          console.log(chalk.bgBlue.black('Obrigado por utilizar o Accounts!'));
          // process.exit();
          break;
      }
    })
    .catch(error => console.log(error));
};
operation();

function createAccount() {
  console.log(chalk.bgGreen.black("Parabéns por escolher o nosso banco!"));
  console.log(chalk.green("Defina as opções da sua conta a seguir!"));

  buildAccount();
};

function buildAccount() {
  inquirer.prompt([{
    name: 'accountName',
    message: 'Digite o nome da sua conta:',
  }])
    .then(response => {
      const accountName = response['accountName'];
      console.log(accountName);

      if (!fs.existsSync('accounts')) {
        fs.mkdirSync('accounts');
      }

      if (fs.existsSync(`accounts/${accountName}.json`)) {
        console.log(chalk.red('Essa conta já existe, escolha outro nome!'));
        buildAccount();
        return;
      }

      fs.writeFileSync(`accounts/${accountName}.json`, '{"balance": 0}', (error) => console.log(error));
      console.log(chalk.green('Conta criada com sucesso!'));

      operation();
    })
    .catch(error => console.log(error));
};

function deposit() {
  inquirer.prompt([{
    name: 'accountName',
    message: 'Qual o nome da sua conta?'
  }])
    .then(response => {
      const accountName = response['accountName'];

      if (!checkAccount(accountName)) {
        return deposit();
      }

      inquirer.prompt([{
        nome: 'amount',
        message: 'Qual o valor do depósito?'
      }])
        .then(response => {
          const amount = response['amount'];
          addAmount(accountName, amount);
          deposit();

        })
        .catch(error => console.log(error));
    })
    .catch(error => console.log(error));
};

function checkAccount(accountName) {
  if (!fs.existsSync(`accounts/${accountName}.json`)) {
    console.log(chalk.red('Essa conta não existe, escolha outro nome!'));
    return false;
  }

  return true;
};

function addAmount(accountName, amount) {
  const account = getAccount(accountName);
  console.log(account);
};

function getAccount(accountName) {
  const accountJSON = fs.readFileSync(`accounts/${accountName}.json`, {
    encoding: 'utf-8',
    flag: 'r',
  });

  return JSON.parse(accountJSON);
};