

import inquirer from "inquirer";
// Define a set of questions
const questions = [
    {
        type: 'input',
        name: 'username',
        message: 'Enter your username:',
    },
    {
        type: 'password',
        name: 'password',
        message: 'Enter your password:',
        mask: '*',
    },
    {
        type: 'confirm',
        name: 'confirm',
        message: 'Are you sure you want to proceed?',
        default: true,
    },
];

// Prompt the user with the defined questions
inquirer.prompt(questions).then((answers) => {
    console.log('User input received:');
    console.log('Username:', answers.username);
    console.log('Password:', answers.password);
    console.log('Confirmation:', answers.confirm);
});
