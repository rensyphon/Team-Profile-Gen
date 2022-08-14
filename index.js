const inquirer = require("inquirer");
const fs = require('fs');
const generateHTML = require('./src/generateHTML')

const Employee = require('./lib/Employee')
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')

// const managerQuestions = [
//     {
//         type: 'input',
//         message: 'What is your name?',
//         name: 'managerName',
//     },
//     {
//         type: 'input',
//         message: 'What is your employee ID?',
//         name: 'managerId',
//     },
//     {
//         type: 'input',
//         message: 'What is your email?',
//         name: 'managerEmail',
//     },
//     {
//         type: 'input',
//         message: 'What is your office number?',
//         name: 'officeNumber',
//     },
//     {
//         type: 'list',
//         message: `What type of employee do you wish to add?`,
//         choices: ['engineer', 'intern', 'none'],
//         name: 'choice',
//     },
// ];

// const engineerQuestions = [
//     {
//         type: 'input',
//         message: `What is the engineer's name?`,
//         name: 'engineerName',
//     },
//     {
//         type: 'input',
//         message: `What is the engineer's ID?`,
//         name: 'engineerId',
//     },
//     {
//         type: 'input',
//         message: `What is the engineer's email?`,
//         name: 'engineerEmail',
//     },
//     {
//         type: 'input',
//         message: `What is the engineer's Github username?`,
//         name: 'github',
//     },
// ];

// const internQuestions = [
//     {
//         type: 'input',
//         message: `What is the intern's name?`,
//         name: 'internName',
//     },
//     {
//         type: 'input',
//         message: `What is the intern's ID?`,
//         name: 'internId',
//     },
//     {
//         type: 'input',
//         message: `What is the intern's email?`,
//         name: 'internEmail',
//     },
//     {
//         type: 'input',
//         message: `What is the intern's school?`,
//         name: 'school',
//     },
// ];

const questions = [
    {
        type: 'input',
        message: 'What is your name?',
        name: 'managerName',
    },
    {
        type: 'input',
        message: 'What is your employee ID?',
        name: 'managerId',
    },
    {
        type: 'input',
        message: 'What is your email?',
        name: 'managerEmail',
    },
    {
        type: 'input',
        message: 'What is your office number?',
        name: 'officeNumber',
    },
    {
        type: 'list',
        message: `What type of employee do you wish to add?`,
        choices: ['engineer', 'intern', 'none'],
        name: 'choice',
    },
    {
        type: 'input',
        message: `What is the engineer's name?`,
        name: 'engineerName',
    },
    {
        type: 'input',
        message: `What is the engineer's ID?`,
        name: 'engineerId',
    },
    {
        type: 'input',
        message: `What is the engineer's email?`,
        name: 'engineerEmail',
    },
    {
        type: 'input',
        message: `What is the engineer's Github username?`,
        name: 'github',
    },
    {
        type: 'input',
        message: `What is the intern's name?`,
        name: 'internName',
    },
    {
        type: 'input',
        message: `What is the intern's ID?`,
        name: 'internId',
    },
    {
        type: 'input',
        message: `What is the intern's email?`,
        name: 'internEmail',
    },
    {
        type: 'input',
        message: `What is the intern's school?`,
        name: 'school',
    },
];

//function to write HTML file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log('Success!')
    );
}

//function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((response) => {
            console.log(response)
            writeToFile('./dist/index.html', generateHTML(response))
        });
}

//initialize app
init();