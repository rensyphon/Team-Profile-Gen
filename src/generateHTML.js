function generateHTML({manager, engineers, interns}) {
  const managerCard = `<div id="employeeCard">
      ${manager.getName()}<br>
      Manager
      ID: ${manager.getId()}<br>
      Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a><br>
      Office #: ${manager.getOfficeNumber()}
  </div>`;

  let engineerCards = '';
  engineers.forEach(engineer => {
      engineerCards += `<div id="employeeCard">
          ${engineer.getName()}<br>
          Engineer<br>
          ID: ${engineer.getId()}<br>
          Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a><br>
          Github: <a target="_blank" href="https://www.github.com/${engineer.getGithub()}">https://www.github.com/${engineer.getGithub()}</a>
      </div>`;
  });

  let internCards = '';
  interns.forEach(intern => {
      internCards += `<div id="employeeCard">
          ${intern.getName()}<br>
          Intern<br>
          ID: ${intern.getId()}<br>
          Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a><br>
          School: ${intern.getSchool()}
      </div>`;
  });

return `<!DOCTYPE html>
        <html lang="en">
          <head>
              <meta charset="UTF-8">
              <meta http-equiv="X-UA-Compatible" content="IE=edge">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <title>Document</title>
              <link rel="stylesheet" type="text/css" href="./style.css">
          </head>
          <header>My Team</header>
          <body>
              ${managerCard}
              ${engineerCards}
              ${internCards}
          </body>
        </html>
`;
}

module.exports = generateHTML;
