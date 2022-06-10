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
                message: 'What is the name of the Manager?'
            },
            {
                type: 'input',
                name: 'managerId',
                message: 'What is the Id of the Manager?'
            },
            {
                type: 'input',
                name: 'managerEmail',
                message: 'What is the email of the Manager?'
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

    }

    function createIntern() {

    }

    function buildTeam() {
        fs.writeFile('team.html', template(teamMembers), function(err) {
            if (err) throw err
            console.log('Team has been built!')
        })
    }

    createManager()
}

createTeam()