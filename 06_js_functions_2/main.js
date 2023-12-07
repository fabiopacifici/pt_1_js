
function calcAge() {
  // make your calculations 
  // all your logic here...
  let result = 43;
  return result
}

const total_age = calcAge()
console.log(total_age);


/* Global scope */

// global variable
let thirdNumber = 10;


function miaFunzione() {
  // Local/Functionm Scope
  let firstNumber = 0; //questa variabile si vede solo qui dentro

  // Global Variable
  secondNumber = 10; //ma se dichiaro una variabile senza  😈
  //var let o const...

  //console.log(firstNumber);
  console.log(thirdNumber);

}


miaFunzione();

const firstNumber = 2;
// firstNumber é nel function scope non esiste qui fuori.
console.log(firstNumber); //ReferenceError: firstNumber is not defined

//second number is a Gobal variable 
console.log(secondNumber); //...si vede anche fuori



/* 

😈 Global variabls 

*/

const nome = 'Marta';


function stampaNome() {
  console.log(nome); // 
}

/* stampaNome(); */
// Marta


/* function myFunction(params) {
  var variable = 'pippo';
  let secondVariable = 10;
  const constantVariable = 'constance';
} */

//console.log(variable);
// Uncaught ReferenceError: variable is not defined
//console.log(secondVariable);
// Uncaught ReferenceError: secondVariable is not defined
//console.log(constantVariable);
// Uncaught ReferenceError: constantVariable is not defined



/* Block Scope 

if (condition) {
  //scope
}

for (condition) {
  //scope 
}

function name(params) {
  //Scope
}

*/




// block scope example 
/* if (true) {
  var variable = 'pippo'; // not subject to block scopes
  let secondVariable = 10; // <-- subject to block scopes
  const constantVariable = 'constance'; // <-- subject to block scopes
} */

//console.log(variable);


//'pippo'   


//console.log(secondVariable);
// Uncaught ReferenceError: secondVariable is not defined
//console.log(constantVariable);
// Uncaught ReferenceError: constantVariable is not defined

/* 
for (let index = 0; index < 10; index++) {
  console.log(index);
}

console.log(index); */



/* for (let index = 0; index < 10; index++) {
  console.log(index);
}

if (index === 10) {
  console.log(index);
} */


/* What? */



a = 0; // global
b = "buongiorno" // global
var c = "ciao"; // global

saluta(); 

console.log("a is " + a); //a is 0
console.log("b is " + b); // buongiono

function saluta() {
  var d = "asd";
  console.log("a is " + a); // <--- a is 0
  var b = a + 1; // 1
  console.log("b is " + b); // <-- b is 1
  console.log(c); // <-- ciao
}

