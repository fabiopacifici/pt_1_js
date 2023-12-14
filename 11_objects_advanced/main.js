/* Objects (Advanced)
- object literal es6 syntax
- object literal dynamic keys
- objects/array destructuring
- rest/spred
- for in
*/

/* 
let name = 'Paolo';
let age = 30;
let email = 'paolo@email.it'; */

//es5 style sempre valido
/* const students = {
  name: name,
  age: age,
  email: email
}; */

//es6 style
/* const students = {
  name,
  age,
  email
}; */

//object literal dynamic keys

/* let name = 'Paolo';
let age = 30;
let email = 'paolo@email.it';

const nameKey = 'age';

const students = {
  name: name,
  [nameKey]: age,
  email: email
}; */

/* Destructuring */

// with objects
const student = {
  name: 'Paolo',
  age: 30,
  email: 'paolo@email.it',
};

/* const name = student.name
const age = student.age
const email = student.email */


const {name, email} = student


console.log(name, email);

// with arrays
const list = ['Fabio', 'Dev', 43]
// skip a value leaving an empty space
const [username, , age] = list

console.log(username, age );



function myFunction(...params) {
  // rest param its an array with all values passed to the function call.
  //console.log(params)
  params.forEach(param => {
    console.log(param);
  })
}
myFunction('uno', 3, { name: 'pippo' }, 4, [12, 4]);
myFunction('ciao')
//avremo un array composto da tre elementi




/* Spread operator */
const obj = { name: 'palla', peso: 50 };

const copyObj = { ...obj, colore: 'blue' };


console.log(copyObj);
//{name: "palla", peso: 50, colore: "blue"}

const movieList = ['Matrix', 'Avatar']
const moreMovies = [ ...movieList, 'Starwars', 'Ritorno al futuro' ]

console.log(moreMovies);



const myName = student.name
const myEmail = student.email


/* ForIn (objects loop) */
const palla = {
  "prezzo": 12,
  "tipo": "pallina da golf"
};


for (let key in palla) {
 // console.log(palla[key]);
 console.log(key, palla[key]);
}

// 1. key = 'prezzo' | palla['prezzo'] = 12
// 2. key = 'tipo' | palla['tipo'] =  pallina da golf


// Risultato atteso: 
// 12
// pallina da golf
// non per forza in questo ordine


/* JS Snacks */

