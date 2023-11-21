/* 
This 
is a 
comment
*/

// This is a comment



/* Hello World */

//document.writeln('Hello World');
//alert('Ciao sono un alert');

// select an element from the document

console.log('Hello World');

console.log(document.getElementById('message').innerHTML);

//document.getElementById('message').innerHTML = 'Hello World';


//console.log(document.getElementById('message')); // The html tag you just selected


/* Variables/Strings/Numbers  */

// '' // <-- write text inside and you have a string
//"" <-- write text inside and you have a string
// `` <-- write text inside and you have a string 😎

console.log('Hello World');
console.log("Hello World");
console.log(`Hello World`);

"Fabio"




/* Variables const/let/var */

// Variables with const must be declared and initialised
// variable declaration + initialized
const username = 'Fabio';
//username = 'Mario'; 
//script.js:47 Uncaught TypeError: Assignment to constant variable

//const lastname;
// Uncaught SyntaxError: Missing initializer in const declaration

console.log(username);


// Let can be re-assigned

// declare and initialize the variable
let user = 'Luke Sky walker';
console.log(user); // Luke ..
// mutate the variable
user = 'Fabio';
console.log(user); // Fabio


// cannot use a let variable before its initialization
//console.log(my_variable); 🛑
let my_variable = 'This is a variable with let';
console.log(my_variable); // 'This is a variable with let'



// variable declaration only logs undefined
/* var myage;
console.log(myage); */ // undefined




// Var can be used before its initialization
console.log(my_age);
//var myage; // 👈 only a variable declaration
var my_age = '43'
console.log(my_age);




/* Variables names:
- camelCase
- under_score_case 
- no special characters
- no number at the beginning
*/

const my_first_name = 'Fabio';

const myLastName = 'Pacificici';

//const 12_my_name = 'iosdjfsodf'; // Erorr

const my_name_12 = 'iosdjfsodf';



let x  = 5;
x = 12;
console.log(x); // 5

let y = x + 2;
console.log(y);
y = 'Ciao Ciao';
console.log(y);


// My script

let person;


// ... 


person = 'Mario';



// dichiarazione variabile
let miaStringa;

// assegnazione
miaStringa = 'ciao';
// utilizzo/richiamo
//alert(miaStringa);

// assegnazione
miaStringa = 'arrivederci';
// utilizzo/richiamo
//alert(miaStringa);







// Strings concatenation

let my_fullname = my_first_name + myLastName

console.log('Fabio' + 'Pacifici'); // FabioPacifici
console.log(my_fullname);

console.log('1' + '1'); //11
console.log('1' + 1); //11





let string = 'Qui';
let stringTwo = 'Qua';
console.log(
  `${string} Quo ${stringTwo}
  Andarono al mercato`
);


//Qui Quo Qua
//Andarono al mercato


// addizione, con il segno +
let somma = 4 + 4;
console.log(somma);
// sottrazione, con il segno -
let sottr = somma - 3; // 8 -3

// divisione, con il segno /
let divisione = somma / 2;

// moltiplicazione, con il segno*
let molt = sottr * 2; 

// Prompt

//const userFirstName = prompt('Type here your first name');

/* console.log(userFirstName);
console.log('Ciao' + userFirstName);
console.log('Ciao' + ' ' + userFirstName);
console.log('Ciao ' + userFirstName);
console.log(`Ciao ${userFirstName}`); */



/* 
Tools to use
- variable
- prompt 
- document
- getElementById
- innerHTML
*/


// chiediamo all'utente la sua etá
const user_age = prompt('What\'s your age'); // "What's your age"
console.log(user_age);

// salva in una variable l'anno attuale
const current_year = 2023
console.log(current_year);
// sottrarre all'anno attuale l'etá dell'utnte e salva in una variable
const result = current_year - Number(user_age) // 2023 - "43"
// loggo in console il risultato
console.log(result);

// stampo in pagina un messaggio per l'utente
const messageElement = document.getElementById('message')
console.log(messageElement);

messageElement.innerHTML = `Sei nato nel: ${result}`;

console.log(messageElement);



/* 
Ask the user name and print a message to the console
- variable
- prompt
- console.log

*/

const this_user_name = prompt('Type your name');

console.log('Ciao ' + this_user_name);

document.getElementById('myname').innerHTML = `Ciao ${this_user_name}`