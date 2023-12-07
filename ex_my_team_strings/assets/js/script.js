/* 
Utilizzando i dati forniti, creare un array di stringhe con i nomi dei membri del team.
MILESTONE 0:
Creare l’array di stringhe contenente i nomi dei membri del team.
MILESTONE 1:
Stampare le informazioni su DOM come card.
MILESTONE 3:
Aggiungere un evento click sulla card che aggiunge/rimuove una classe per evidenziare un componente del team.
BONUS 1:
In generale curare la parte di UI e organizzare i singoli membri in card/schede.
BONUS 2:
Inserire un form per l’aggiunta di un elemento alla lista.

*/


// setup

const team = [
  'Luca Agostino',
  'Cristina G.',
  'Giuseppe Vartuli',
  'Davide Peloso',
  'Leonard Suli',
  'Paki Bruno',
  'Sarah Elsharkawy'
];

const teamContainerEl = document.getElementById('team')

// 2, Generates the whole team cards

/* for (let i = 0; i < team.length; i++) {
  const member = team[i];


  // 1. generate the memberMarkup
  //`<div class="col-4">${member}</div>`
  // add a div
  //const memberEl = document.createElement('div')
  // add a class to the div col-4
  //memberEl.classList.add('col-4')
  //memberEl.append(member)

  //console.log(memberEl);
  //memberEl.addEventListener('click', function(e){
  //  console.log(e.target, this);

  //    this.classList.toggle('bg-primary');

  //})


  const memberEl = generateMemberCard(member);

  //<div class="col-4">member in posizione i</div>
  teamContainerEl.appendChild(memberEl)

} */


generateTeamCards(team, teamContainerEl);


document.getElementById('add-member').addEventListener('submit', function (e) {
  e.preventDefault()

  const newMember = document.getElementById('member').value
  console.log(newMember);

  const memberEl = generateMemberCard(newMember)

  teamContainerEl.appendChild(memberEl)

  document.getElementById('member').value = ''


})




/**
 * Generates all team cards
 * @param {array} list The list of team members 
 * @param {object} domNode The dom element where append the list 
 */
function generateTeamCards(list, domNode) {

  for (let i = 0; i < list.length; i++) {
    const member = list[i];

    const memberEl = generateMemberCard(member);


    domNode.appendChild(memberEl)

  }
}


/**
 * ## Genrate member card
 * This funciton generate a dom element 
 * with an eventListener 
 * @param {string} member The member name
 * @returns Object
 */
function generateMemberCard(member) {
  const memberEl = document.createElement('div')
  memberEl.classList.add('col-4')
  memberEl.append(member)

  memberEl.addEventListener('click', function (e) {

    this.classList.toggle('bg-primary');
  })

  return memberEl;
}


//console.log(window);