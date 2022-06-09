const Employee = require('./Employee')

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email)
        this.github = github
    }
    getRole() {
        return "Engineer"
    }
    gerGithub () {
        return this.github
    }
}

module.exports = Engineer