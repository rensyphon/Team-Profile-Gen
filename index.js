const inquirer = require("inquirer");
const fs = require('fs');
const generateHTML = require('./src/generateHTML')

let allResponseData = {
    manager: null,
    engineers: [],
    interns: []
};

const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')

const initialQuestions = [
    {
        type: 'input',
        message: 'What is the team manager\'s name?',
        name: 'managerName',
    },
    {
        type: 'input',
        message: 'What is the team manager\'s employee ID?',
        name: 'managerId',
    },
    {
        type: 'input',
        message: 'What is the team manager\'s email?',
        name: 'managerEmail',
    },
    {
        type: 'input',
        message: 'What is the team manager\'s office number?',
        name: 'managerOfficeNumber',
    },
    {
        type: 'list',
        message: `What would you like to do next?`,
        choices: ['add Engineer', 'add Intern', 'finish building team'],
        name: 'choice',
    }
];

const engineerQuestions = [
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
        name: 'engineerGithub',
    },
    {
        type: 'list',
        message: `What would you like to do next?`,
        choices: ['add Engineer', 'add Intern', 'finish building team'],
        name: 'choice',
    }
];

const internQuestions = [
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
        name: 'internSchool',
    },
    {
        type: 'list',
        message: `What would you like to do next?`,
        choices: ['add Engineer', 'add Intern', 'finish building team'],
        name: 'choice',
    }
];

//function to write HTML file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log('Success!')
    );
}

function handleChoice(choice) {
    if (choice === 'finish building team') {
        writeToFile('./dist/index.html', generateHTML(allResponseData));
    } else if (choice === 'add Engineer') {
        addEngineer()
    } else if (choice === 'add Intern') {
        addIntern()
    }
}

function addIntern() {
    inquirer
        .prompt(internQuestions)
        .then((response) => {
            const {choice, internName, internId, internEmail, internSchool} = response;
            const newIntern = new Intern(internName, internId, internEmail, internSchool);
            allResponseData.interns.push(newIntern);

            handleChoice(choice);
        });
}

function addEngineer() {
    inquirer
        .prompt(engineerQuestions)
        .then((response) => {
            const {choice, engineerName, engineerId, engineerEmail, engineerGithub} = response;
            const newEngineer = new Engineer(engineerName, engineerId, engineerEmail, engineerGithub);
            allResponseData.engineers.push(newEngineer);

            handleChoice(choice);
        });
}

//function to initialize app
function init() {
    inquirer
        .prompt(initialQuestions)
        .then((response) => {
            const {choice, managerName, managerId, managerEmail, managerOfficeNumber} = response;
            allResponseData.manager = new Manager(managerName, managerId, managerEmail, managerOfficeNumber);
            handleChoice(choice);
        });
}

//initialize app
init();