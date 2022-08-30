const inquirer = require('inquirer');
const fs = require('fs');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const { ConnectableObservable } = require('rxjs');

const employees = [];

const managerPrompt = function () {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: "Please input the team Manager's name",
            validate: mgrName => {
                if (mgrName) {
                    return true;
                }
                else {
                    console.log("Manager name missing. Try again.")
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the Manager's ID?",
            validate: mgrId => {
                if (isNaN(mgrId)) {
                    console.log("Please enter a valid numerical ID");
                    return false;
                }
                else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the Manager's email?",
            validate: mgrEmail => {
                if (mgrEmail) {
                    return true;
                }
                else {
                    console.log("Please enter a valid email");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'office',
            message: "What is the Manager's office number?",
            validate: officeNum => {
                if (isNaN(officeNum)) {
                    console.log("Please enter a valid office number")
                    return false;
                }
                else {
                    return true;
                }
            }
        }
    ]) 
    .then(managerData => {
        const {name, id, email, office } = managerData;
        const manager = new Manager (name, id, email, office);

        employees.push(manager);
    })  
};

