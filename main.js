/* game creation */
function createGame(player1, hour, player2) {
  return `
    <li>
      <img src="./assets/icon=${player1}.svg" alt="Bandeira do ${player1}" />
      <strong>${hour}</strong>
      <img src="./assets/icon=${player2}.svg" alt="Bandeira da ${player2}" />
    </li>
  `
}

/* animations and card creation */
let delay = -0.4;
function createCard(date, day, games) {
  delay = delay + 0.4;
  return `
    <div class="card" style="animation-delay: ${delay}s">
      <h2>${date} <span>${day}</span></h2>
      <ul>
        ${games}
      </ul>
    </div>
  `
}

/* query data into html */
document.querySelector("#cards").innerHTML =
  createCard("20/11", "sunday", 
  createGame("qatar", "16:00", "ecuador")) +
  
  createCard("21/11","monday", 
  createGame("england", "13:00", "iran") + 
  createGame("senegal", "16:00", "netherlands") +
  createGame("united states", "19:00", "wales")) +
  
  createCard("22/11", "Tuesday", 
  createGame("argentina", "10:00", "saudi arabia") + 
  createGame("denmark", "13:00", "tunisia") + 
  createGame("mexico", "16:00", "poland") + 
  createGame("france", "19:00", "australia")) +
  
  createCard("23/11", "Wednesday", 
  createGame("morocco", "10:00", "croatia") + 
  createGame("germany", "13:00", "japan") + 
  createGame("spain", "16:00", "costa rica") + 
  createGame("belgium", "19:00", "canada")) +
  
  createCard("24/11", "thursday", 
  createGame("switzerland", "10:00", "cameroon") + 
  createGame("uruguay", "13:00", "south korea") + 
  createGame("portugal", "16:00", "ghana") + 
  createGame("brazil", "19:00", "serbia")) +
  
  createCard("25/11", "friday", 
  createGame("wales", "10:00", "iran") + 
  createGame("qatar", "13:00", "senegal") + 
  createGame("netherlands", "16:00", "ecuador") + 
  createGame("england", "19:00", "united states")) +
  
  createCard("26/11", "saturday", 
  createGame("tunisia", "10:00", "australia") + 
  createGame("poland", "13:00", "mexico") + 
  createGame("france", "16:00", "denmark") + 
  createGame("argentina", "19:00", "mexico")) +
  
  createCard("27/11", "sunday", 
  createGame("japan", "10:00", "costa rica") + 
  createGame("belgium", "13:00", "morocco") + 
  createGame("croatia", "16:00", "canada") + 
  createGame("spain", "19:00", "germany")) +
  
  createCard("28/11", "monday", 
  createGame("cameroon", "10:00", "serbia") + 
  createGame("south korea", "13:00", "ghana") + 
  createGame("brazil", "16:00", "switzerland") + 
  createGame("portugal", "19:00", "uruguay")) +
  
  createCard("29/11", "Tuesday", 
  createGame("ecuador", "15:00", "senegal") + 
  createGame("netherlands", "15:00", "qatar") + 
  createGame("iran", "19:00", "united states") + 
  createGame("wales", "19:00", "england")) +
  
  createCard("30/11", "Wednesday", 
  createGame("tunisia", "15:00", "france") + 
  createGame("australia", "15:00", "denmark") + 
  createGame("poland", "19:00", "argentina") + 
  createGame("saudi arabia", "19:00", "mexico")) +
  
  createCard("01/12", "thursday", 
  createGame("croatia", "15:00", "belgium") + 
  createGame("canada", "15:00", "morocco") + 
  createGame("japan", "19:00", "spain") + 
  createGame("costa rica", "19:00", "germany")) +
  
  createCard("02/12", "friday", 
  createGame("south korea", "15:00", "portugal") + 
  createGame("ghana", "15:00", "uruguay") + 
  createGame("serbia", "19:00", "switzerland") + 
  createGame("cameroon", "19:00", "brazil"))
