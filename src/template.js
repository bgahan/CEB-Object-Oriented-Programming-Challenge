function generateTeam(team) {
    function buildManager(manager) {
        return `<div>
            <h1>${manager.getName()}</h1>
        </div>`
    }

    function buildEngineer(engineer) {
        return `<div>
            <h1>${engineer.getName()}</h1>
        </div>`
    }

    function buildIntern(intern) {
        return `<div>
            <h1>${intern.getName()}</h1>
        </div>`
    }

    const arr = []

    arr.push(team.filter(emp => emp.getRole === 'Manager').map(manager => buildManager(manager)))

    arr.push(team.filter(emp => emp.getRole === 'Engineer').map(engineer => buildEngineer(engineer)))

    arr.push(team.filter(emp => emp.getRole === 'Intern').map(intern => buildIntern(intern)))


    return arr.join("")
}




module.exports = team => {
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div>
        ${generateTeam(team)}
    </div>
</body>
</html>`
}