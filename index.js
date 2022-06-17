const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const inquirer = require('inquirer')
const path = require('path')
const fs = require('fs')

const template = require('./src/template')

const teamMembers = []
const idArray = []

function createTeam() {
    function createManager() {
        inquirer.prompt([
            {
                type: 'input',
                name: 'managerName',
                message: 'What is the name of the Manager?',
                validate: answer => {
                    if(answer !== '') {
                        return true
                    }
                    return 'this is a required input'
                }
            },
            {
                type: 'input',
                name: 'managerId',
                message: 'What is the Id of the Manager?',
                validate: answer => {
                    if(!isNaN(answer)) {
                        return true
                    }
                    return 'this is must be a number'
                }
            },
            {
                type: 'input',
                name: 'managerEmail',
                message: 'What is the email of the Manager?',
                validate: answer => {
                    if(answer.match(/\S+@\S+\.\S+/)) {
                        return true
                    }
                    return 'this is must be a valid email address'
                }
            },
            {
                type: 'input',
                name: 'managerOfficeNum',
                message: 'What is the office number of the Manager?'
            }
        ]).then(answers => {
            const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNum)
            teamMembers.push(manager)
            console.log(teamMembers);
            whichMember()
        })
    }

    function whichMember() {
        inquirer.prompt([
            {
                type: 'list',
                name: 'members',
                message: 'Who would you like to add next?',
                choices: ['Engineer', 'Intern', 'Done']
            }
        ]).then(answer => {
            if (answer.members === 'Engineer') {
                createEngineer()
            } else if (answer.members === 'Intern') {
                createIntern()
            } else {
                buildTeam()
            }
        })
    }

    function createEngineer() {
        inquirer.prompt([
            {
                type: 'input',
                name: 'engineerName',
                message: 'What is the name of the Engineer?'
            },
            {
                type: 'input',
                name: 'engineerId',
                message: 'What is the Id of the Engineer?'
            },
            {
                type: 'input',
                name: 'engineerEmail',
                message: 'What is the email of the Engineer?'
            },
            {
                type: 'input',
                name: 'engineerGithub',
                message: 'What is the GitHub of the Engineer?'
            }
        ]).then(answers => {
            const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub)
            teamMembers.push(engineer)
            console.log(teamMembers);
            whichMember()
        })
    }

    function createIntern() {
        inquirer.prompt([
            {
                type: 'input',
                name: 'internName',
                message: 'What is the name of the Intern?'
            },
            {
                type: 'input',
                name: 'internId',
                message: 'What is the Id of the Intern?'
            },
            {
                type: 'input',
                name: 'internEmail',
                message: 'What is the email of the Intern?'
            },
            {
                type: 'input',
                name: 'internGithub',
                message: 'What School does the Intern go to?'
            }
        ]).then(answers => {
            const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internGithub)
            teamMembers.push(intern)
            console.log(teamMembers);
            whichMember()
        })
    }

    function buildTeam() {
        fs.writeFile('team.html', template(teamMembers), function (err) {
            if (err) throw err
            console.log('Team has been built!')
        })
    }

    createManager()
}

createTeam()