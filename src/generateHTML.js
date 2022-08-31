const createManager = function (manager) {
    return `
    <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${manager.name}</h5>
    <h6 class="card-subtitle mb-2 text-muted">Manager</h6>
    <p class="id">ID: ${manager.id}</p>
    <p class="email">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
    <p class="office">Office Number: ${manager.officeNumber}</p>
    
  </div>
</div>`;
}

const createEngineer = function (engineer) {
    return `
    <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${engineer.name}</h5>
    <h6 class="card-subtitle mb-2 text-muted">Manager</h6>
    <p class="id">ID: ${engineer.id}</p>
    <p class="email">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
    <p class="github">Github: ${engineer.github}</p>
    
  </div>
</div>`;
}

const createIntern = function (intern) {
    return `
    <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${intern.name}</h5>
    <h6 class="card-subtitle mb-2 text-muted">Manager</h6>
    <p class="id">ID: ${intern.id}</p>
    <p class="email">Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
    <p class="school">School: ${intern.school}</p>
    
  </div>
</div>`;
}

createHTML = (data) => {

    cardData = [];

    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.getRole(); 


        // call manager function
        if (role === 'Manager') {
            const managerCard = createManager(employee);

            cardData.push(managerCard);
        }

        // call engineer function
        if (role === 'Engineer') {
            const engineerCard = createEngineer(employee);

            cardData.push(engineerCard);
        }

        // call intern function 
        if (role === 'Intern') {
            const internCard = createIntern(employee);

            cardData.push(internCard);
        }
}

const teamCards = cardData.join('')

    // return to generated page
    const createTeam = createTeamProfile(teamCards); 
    return createTeam;

}

const createTeamProfile = function (teamCards) {
    return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Team Profiles</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
  </head>
  <body>
      <header>
      <nav class="navbar bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <i class="bi bi-journal-bookmark-fill" class="d-inline-block align-text-top">
          Team Profiles
        </a>
      </div>
    </nav>
      </header>
      <main>
          <div class="container">
              <div class="row justify-content-center" id="team-cards">
                  <!--Team Cards-->
                  ${teamCards}
              </div>
          </div>
      </main>
      
  </body>
  </html>
`;
}

module.exports = createHTML;