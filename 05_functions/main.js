/**
 * Functions
 * - parola chiave function
 * - functionName
 * - ()
 * - { //Your code here}
 * ************** **/

//
let firstname;

// [Syntax] Function declaration Syntax
// without parameters
/* function functionName() {
  // Your code here 
} */


// [Syntax] function declaration with a single parameter
/* function functionName(param_1) {
  
} */

// [Syntax] Fnction declaratio with multiple parameters

/* function functionName(param_1, param_2, param_3) {

}
 */

// Function expression
/* const functionName = function () {

} */


// 😮  Anonymous function (no name no call)
/* function(){

}

 */



// Function Without parameter 
/* sayHi(); // Hi

function sayHi() {
  console.log('Hi');
}
sayHi(); // hi */



// Function with a parameter

/* function sayHi(name, lastname){
  console.log(`Ciao ${name} ${lastname}`);
}



sayHi('Fabio', 'Pacifici') */




// calculates the user age given its year of birth
/* const year_of_birth = 1980; //prompt('What is your year of birth')
const now = new Date().getFullYear(); // 2023

console.log(now, year_of_birth);
const age = now - year_of_birth

console.log(age);
 */



// 200 righe di codice dopo


/* const year_of_birth = 1990; //prompt('What is your year of birth')

const now = new Date().getFullYear(); // 2023

console.log(now, year_of_birth);
const age = now - year_of_birth

console.log(age); */





function calcAge(year_of_birth) {

  const now = new Date().getFullYear(); // 2023

  console.log(now, year_of_birth);
  const age = now - year_of_birth

  console.log(age);
}





/*
* Invoke a function
*******************/

//functionName();
//functionName()



const user_year_of_birth = 1990; //prompt('What is your year of birth')
//calcAge(1990) 
calcAge(user_year_of_birth)
calcAge(1880)
calcAge(2010)





function sommaNumeri(num1, num2) {

  alert(num1 + num2);

}

//sommaNumeri(2, 4)


// number_1 = 2
// number_2 = 2
//const result = 10;
//console.log(result); // referene Error result not defined

function sum(number_1, number_2) {

  //const result = number_1 + number_2

  return number_1 + number_2

}

console.log(2); // only a value need a log
console.log(2 + 2); // only a value need a log
console.log(sum(2, 2)) // only a value need a log


const result = sum(2, 2);

console.log(result); // referene Error result not defined






/* 



// pari o dispari: scrivere una funzione per verificare se un numero è pari o dispari, 
// quindi chiedere un numero all'utente e comunicargli se è pari o dispari

Create a function that checks if a number is even or odd
*/



// Chiedere un numero all'utente e comunicargli se è pari o dispari

// verificare se un numero è pari o dispari, 

//const user_number = Number(prompt('Type a number'));

/* if(user_number % 2 === 0){
  console.log(user_number, "Pari");
} else {
  console.log(user_number, "Dispari");

} */

// quindi chiedere un numero all'utente 
// e comunicargli se è pari o dispari


/**
 * Scrivere una funzione per verificare se un numero è pari o dispari
 */
/* function is_even(user_number){

  if (user_number % 2 === 0) {
    console.log(user_number, "Pari");
  } else {
    console.log(user_number, "Dispari");

  }

} */



/**
 * ### Is Even
 * checks if a number is even
 * @param {number} user_number 
 */
function is_even(user_number) {

  if (user_number % 2 === 0) {
    //return 'pari'
    return true;
  } 
  //return 'dispari'
  return false;

}

//const anotherUserNumber = Number(prompt('Type a number'))

//console.log(is_even(33) === 'pari');


/* 
if (is_even(anotherUserNumber)){
  console.log('Pari');
} else {
  console.log('Dispari');
} */



/* 

Generate a random number between a min and a max value

*/
function getRandomInteger(min, max) {
  console.log(max - min + 1);
  console.log(Math.random());

  console.log(Math.random() * (max - min + 1));

  return Math.floor(Math.random() * (max - min + 1)) + min;

}





console.log(getRandomInteger(5, 50));

document.getElementById('random').innerText = getRandomInteger(50, 500);

