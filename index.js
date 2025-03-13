const fs = require('fs');
fs.readFile('text.txt', 'utf8', (error, data) => {
  error ? console.log(error) : console.log(data);
});