const inquirer = require('inquirer');
const fs = require('fs');
const createHTML = require('./src/generateHTML');

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

const addTeamMember = function () {
    return inquirer.prompt ([
        {
            type: 'list',
            name: 'role',
            message: 'Which team member role would you like to add?',
            choices: ['Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'name',
            message: "Please input the team member's name",
            validate: memberName => {
                if (memberName) {
                    return true;
                }
                else {
                    console.log("Team member name missing")
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the team member's ID?",
            validate: memberID => {
                if (isNaN(memberID)) {
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
            message: "What is the team member's email?",
            validate: memberEmail => {
                if (memberEmail) {
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
            name: 'github',
            message: "What is the Engineer's Github username?",
            when: (input) => input.role === "Engineer",
            validate: memberGithub => {
                if (memberGithub) {   
                    return true;
                }
                else {
                    console.log("Required! Please enter their Github username")
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: "What is the Intern's school name?",
            when: (input) => input.role === "Intern",
            validate: memberSchool => {
                if (memberSchool) {   
                    return true;
                }
                else {
                    console.log("Required! Please enter their school")
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmAddMember',
            message: 'Would you like to add any additional team members?',
            default: false
        }
    ]) 
    .then(memberData => {
        let {name, id, email, role, github, school, confirmAddMember} = memberData;
        let member;

        if (role === 'Engineer') {
            member = new Engineer (name, id, email, github);
        }
        else if (role === 'Intern') {
            member = new Intern (name, id, email, school)
        }

        employees.push(member);

        if (confirmAddMember) {
            return addTeamMember(employees);
        }
        else {
            return employees;
        }
    })  
};




managerPrompt()
.then(addTeamMember)
.then(employees => {
    return createHTML(employees);
})
.then(data => {
   fs.writeFile('./dist/index.html', data, err => {
       if (err) {
           console.log(err);
           return;
       }
       else {
           console.log('HTML creation successful!')
       }
   }) 
})
.catch(err => {
    console.log(err);
});