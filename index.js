const inquirer = require("inquirer");

const employeeQuestions = [
    {
        type: 'input',
        message: 'What is your name?',
        name: 'name',
    },
    {
        type: 'input',
        message: 'What is your employee ID?',
        name: 'id',
    },
    {
        type: 'input',
        message: 'What is your email?',
        name: 'email',
    },
    {
        type: 'list',
        message: `What is the employee's role?`,
        choices: ['manager', 'engineer', 'intern'],
        name: 'role',
    },
    {
        type: 'input',
        message: `Please provide your engineer's github username.`,
        name: 'github',
        when: (answers) => answers.role === "engineer",
    },
    {
        type: 'input',
        message: 'What are the instructions to run your tests?',
        name: 'tests',
    },
    {
        type: 'input',
        message: 'What email can questions be directed to?',
        name: 'questions',
    },
];