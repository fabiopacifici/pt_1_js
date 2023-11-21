console.log('it works');

/* DOM Manipulation */

// Get element by ID
const element = document.getElementById("saluto");

// element è un DOM Object Element
console.log(element);
console.log(typeof(element)) //object


// Query Selector
const cardElement = document.querySelector('.card');



/* Class List */

console.log(cardElement.classList); // DOMTokenList

const list = cardElement.classList;

list.add('text-primary');
list.remove('text-white');


/* Class name */

console.log(cardElement.className); // card mb-4 py-4 bg-dark text-white

cardElement.className = 'bg-danger'; // set the value
cardElement.className = cardElement.className +  ' card';
cardElement.className += ' py-5';

console.log(cardElement.className);


// Style 

console.log(cardElement.style.color) // read only

cardElement.style.color = 'Purple'; // set the property 



// Value 

let fname = document.getElementById('fullname').value // read 
console.log(fname);

let fname_2 = document.getElementById('fullname').value = 'Fabio 2' //set
console.log(fname_2); 



/* Append vs innerHTML += */

const div = document.querySelector("div.red");
//metodo che già conosciamo
div.innerHTML += '<p>Mio testo</p>'; // also tags
//oppure
//div.append('Mio testo'); // only text
//con questo metodo 
//non possiamo usare tag


/* Brief introduction to function */
// funzione é un azione con un nome
// questa azione e definita e puó essere invocata tramite il suo nome

// Function declaration
function my_alert() {
  // function body
  alert('sdkmfsdf')

}
// can be invoked because has a name
//my_alert();

// anonymous function 
// cannot be invoked (I have no name!)
/* function () {
  // function body
  alert();
}
*/


const cliccableCardElement = document.querySelector('.cliccable-card');


console.log(cliccableCardElement);

cliccableCardElement.addEventListener('click', function(){
  console.log('Clicked!');
});






document.querySelector('#randomButton').addEventListener('click', function () {

  alert('Ciao Mi hai cliccato?');

})



/* Read an input on click */


document.getElementById('form-submit').addEventListener('click', function(){
  console.log(document.getElementById('fullname').value);

  const full_name = document.getElementById('fullname').value;

  alert('Ciao ' + full_name);

})



/* Live 3 

LiveCoding#3:
Il software deve chiedere all’utente il suo nome e il sesso con due prompt diversi.
Sulla pagina html deve apparire “Ciao <nome>”, il colore del nome deve essere azzurro o rosa a seconda del sesso inserito

- prompt or input:text
- const/let
- document.getElementById('id') oppure document.querySelect('.selettore > .css')
- innerHTML
- if/else
- element.classList oppure element.className

*/



// Il software deve chiedere all’utente il suo nome e lo salvo in una variabile
 
// Il software deve chiedere all’utente il sesso e lo salvo in una variabile

// Seleziono l'elemento della DOM nel quale scrivere il testo "ciao nome"

// Controllo se il sesso é M
  // - aggiungo la classe css blue all'elemento
// Controllo se il sesso é F
  //- agggiungo la classe css pink all'elemento
// Altrimenti
  //- aggiungo la classe arcobaleno
