/* 

L’utente inserisce due numeri in successione, con due prompt.

Il software stampa il maggiore.
*/

// - chiedo all'utente di inserire un primo numero e lo salvo in una variabile
const first_number = Number(prompt('Type a number'));
//console.log(first_number);

// - chiedo all'utente di inserire un secondo numero e lo salvo in una variabile

const second_number = Number(prompt('Type another number'));
//console.log(second_number);


// - verifico se il primo numero é maggiore del secondo
if (isNaN(first_number) || isNaN(second_number)) {
  alert('You must type two numbers')
} else if (first_number > second_number) {
  //  - stampo il primo numero
  console.log('First number greather than the second', first_number);
} else if (second_number > first_number) {
  //- altrimenti se il numero due é maggiore del primo
  //- stampo il secondo
  console.log('Second number greather than the first', second_number);
} else {
  // - altimenti sono uguali
  // - stampo un messaggio
  console.log('Numbers are equal', first_number, second_number);

}