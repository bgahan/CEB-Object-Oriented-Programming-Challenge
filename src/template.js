// create specific HTML elements based on the type of employee the user entered
function generateTeam(team) {
    function buildManager(manager) {
        return `<div class="employee">
            <div class="title">
                <h2>${manager.getName()}</h2>
                <h3>${manager.getRole()}</h3> 
            </div>
                <p>ID: ${manager.getId()}</p>
                <p>Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></p>
                <p>Office number: ${manager.getOfficeNumber()}</p>
        </div>`
    }

    function buildEngineer(engineer) {
        return `<div class="employee">
        <div class="title">
            <h2>${engineer.getName()}</h2>
            <h3>${engineer.getRole()}</h3>
            </div>
                <p>ID: ${engineer.getId()}</p>
                <p>Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></p>
                <p>GitHub: <a href="${engineer.getGithub()}" target="_blank">${engineer.getGithub()}</a></p>
        </div>`
    }

    function buildIntern(intern) {
        return `<div class="employee">
        <div class="title">
            <h2>${intern.getName()}</h2>
            <h3>${intern.getRole()}</h3>
            </div>
                <p>ID: ${intern.getId()}</p>
                <p>Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></p>
                <p>School: ${intern.getSchool()}</p>
        </div>`
    }

    // build an array with all the new html data and join together
    const arr = []

    arr.push(team.filter(emp => emp.getRole() === 'Manager').map(manager => buildManager(manager)))

    arr.push(team.filter(emp => emp.getRole() === 'Engineer').map(engineer => buildEngineer(engineer)))

    arr.push(team.filter(emp => emp.getRole() === 'Intern').map(intern => buildIntern(intern)))


    return arr.join("")
}



// add and export html data based on team information
module.exports = team => {
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="dist/style.css">
    <title>My Team</title>
</head>
<body>
    <header>
        <h1>My Team</h1>
    </header>
    <div class='container'>
        ${generateTeam(team)}
    </div>
</body>
</html>`
}