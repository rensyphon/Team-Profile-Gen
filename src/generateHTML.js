function generateHTML(data) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<div id="employeeCard">
${data.managerName}<br>
Manager
ID: ${data.managerId}<br>
Email: <a href="mailto:${data.managerEmail}">${data.managerEmail}</a><br>
Office #: ${data.officeNumber}
</div>
    <div id="employeeCard">
    ${data.engineerName}<br>
    Engineer<br>
    ID: ${data.engineerId}<br>
    Email: <a href="mailto:${data.engineerEmail}">${data.engineerEmail}</a><br>
    Github: <a href="https://www.github.com/${data.github}">https://www.github.com/${data.github}</a>
    </div>
    <div id="employeeCard">
    ${data.internName}<br>
    Intern<br>
    ID: ${data.internId}<br>
    Email: <a href="mailto:${data.internEmail}">${data.internEmail}</a><br>
    School: ${data.school}
    </div>
</body>
</html>
  `;
  };
  
  module.exports = generateHTML;