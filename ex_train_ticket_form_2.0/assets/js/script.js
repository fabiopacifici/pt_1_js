console.log('Hello, world!');

/* 

Descrizione:
Scrivere un programma che chieda all’utente:
- Il numero di chilometri da percorrere
- Età del passeggero
Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km) 
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.

MILESTONE 1:
Iniziamo implementando il programma senza alcuna estetica: 
usando esclusivamente due input e un bottone (non stilizzati), 
realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console. 

## Tools: 
- inputs
- const/let
- Math
- if/else
- document.getElementById/querySelector
- element.value
- element.addEventListener()
- function(){//code here}


*/

// select required DOM elements
const generateBtnElement = document.querySelector('#generate');
const ageInputElement = document.querySelector('#age');
const kmInputElement = document.querySelector('#km');
const price_per_km = 0.21;
// add an event listener on the button 
generateBtnElement.addEventListener('click', function () {

  //console.log('clicked', ageInputElement.value, kmInputElement.value);
  // read the input values
  const age = parseInt(ageInputElement.value); // parseInt()
  const km = Number(kmInputElement.value); // convert a numeric string in a number

  //console.log(age, km, price_per_km); // two strings here
  //console.log(km * price_per_km); // two strings here


  // do your math
  //il prezzo del biglietto è definito in base ai km (0.21 € al km) 
  const full_price = km * price_per_km;

  console.log(full_price);
  let discount;

  if (age < 18) {
    console.log('apply a 20% discount');
    discount = 0.2

  } else if (age > 65) {

    console.log('apply a 40% discount');
    discount = 0.4
  } else {
    console.log('Apply full price');
   
    discount = 0

  }

  const final_price = full_price - (full_price * discount)
  console.log('Your ticket price is:', '€' + final_price.toFixed(2));



  document.getElementById('ticket').innerHTML = 'Your ticket price is: ' + '€' + final_price.toFixed(2);
  


  /* 
  secondo le seguenti regole:
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65. 
*/



})

/* 
	Option 2 With form + type=submit button
  different event listener used 'submit'
  added e.preventDefault() to block page refresh when form is submitted.
*/

document.querySelector('form').addEventListener('submit', function(e) {
    console.log('form submitted');
    e.preventDefault(); // prevent the form from refreshing the page

    console.log(e);



})






