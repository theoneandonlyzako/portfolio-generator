const inquirer = require('inquirer');
// const fs = require('fs');
// const generatePage = require('./src/page-template.js');

// const pageHTML = generatePage(name, github);

// const profileDataArgs = process.argv.slice(2);

// const [name, github] = profileDataArgs;
  
// fs.writeFile('./index.html', generatePage(name, github), err => {
// if (err) throw new Error(err);

// console.log('portfolio complete! checkout index.html to see the output!');
// });
inquirer
.prompt([
    {
        type: 'input',
        name: 'name',
        message: 'What is your Name?'
    }
])
.then(answers => console.log(answers));

