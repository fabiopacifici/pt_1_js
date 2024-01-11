/* console.log('ciao, ciao');

console.log('ciao');

console.log('ciao2');


for (let index = 0; index < 10; index++) {
  console.log(index);
  
} */



/* ⌚ Async functions 

// con funzione normale
setInterval(function(){
  
}, 3000);


//con funzione anonima arrow

setTimeout(()=>{
  console.log('This is a set timeout');
}, 2000)

*/
// set timeout con callcack handler
/* setTimeout(myFunction, 1000);

function myFunction() {
  console.log('Hello');
}

console.log('ciao finale');
console.log('ciao finale');
console.log('ciao finale');
console.log('ciao finale');
console.log('ciao finale');
console.log('ciao finale'); */



/* ⌚ Set Interval 
setInterval(function(){

}, 3000);



*/
/* const clock = setInterval(sayHi, 1000);

function sayHi() {
  console.log('Hi');
}

console.log(clock);
console.log('ciao finale');
console.log('ciao finale');


setInterval(()=>{
  console.log('This is a set interval');
}, 2000)


clearInterval(clock) */


/* 
EX1
Il programma chiede all’utente quanti secondi mancano alla cottura della pasta.
Dopo il tempo indicato, appare un alert().
*/
/* 
const seconds = Number(prompt('Quanti secondi mancano alla cottura della pasta?'))


console.log(seconds);


setTimeout(() => {
  //alert('É pronta la pasta')
  document.querySelector('h1').innerHTML = 'É pronta la pasta';
}, seconds * 1000);
 */



/* 
EX2

Simulare un countdown di 10 secondi che alla fine dice "Buon anno!"

*/


/* 

Cliccando su un pulsante, viene avviato un cronometro.
Per fermare il cronometro, bisogna cliccare su un secondo pulsante.


*/
