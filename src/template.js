function generateTeam(team) {
    function buildManager(manager) {
        return `<div class="employee">
            <div class="title">
                <h2>${manager.getName()}</h2>
                <h3>${manager.getRole()}</h3> 
            </div>
                <p>ID: ${manager.getId()}</p>
                <p>Email: ${manager.getEmail()}</p>
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
                <p>Email: ${engineer.getEmail()}</p>
                <p>GitHub: ${engineer.getGithub()}</p>
        </div>`
    }

    function buildIntern(intern) {
        return `<div class="employee">
        <div class="title">
            <h2>${intern.getName()}</h2>
            <h3>${intern.getRole()}</h3>
            </div>
                <p>ID: ${intern.getId()}</p>
                <p>Email: ${intern.getEmail()}</p>
                <p>School: ${intern.getSchool()}</p>
        </div>`
    }

    const arr = []

    arr.push(team.filter(emp => emp.getRole() === 'Manager').map(manager => buildManager(manager)))

    arr.push(team.filter(emp => emp.getRole() === 'Engineer').map(engineer => buildEngineer(engineer)))

    arr.push(team.filter(emp => emp.getRole() === 'Intern').map(intern => buildIntern(intern)))


    return arr.join("")
}




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