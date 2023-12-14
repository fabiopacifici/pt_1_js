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


const { name, email } = student


console.log(name, email);

// with arrays
const list = ['Fabio', 'Dev', 43]
// skip a value leaving an empty space
const [username, , age] = list

console.log(username, age);



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
const moreMovies = [...movieList, 'Starwars', 'Ritorno al futuro']

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


/* 
Crea un array di oggetti che rappresentano degli animali.
Ogni animale ha un nome, una famiglia e una classe.
Es:
[
  { nome: 'leone', famiglia: 'felidi', classe: 'mammiferi' },
  { nome: 'cane', famiglia: 'canidi', classe: 'mammiferi' },
  { nome: 'gallina', famiglia: 'fasianidi', classe: 'uccelli' },
]
Crea un nuovo array con la lista dei mammiferi.

*/


const animals = [
  { nome: 'leone', famiglia: 'felidi', classe: 'mammiferi' },
  { nome: 'cane', famiglia: 'canidi', classe: 'mammiferi' },
  { nome: 'gallina', famiglia: 'fasianidi', classe: 'uccelli' },
]


// compatta
const mammals = animals.filter(animal => animal.classe === 'mammiferi')
// estesa

const mammals_animals = animals.filter(function(animal){
  if(animal.classe === 'mammiferi') {
    return true
  }
})

console.log(mammals);
console.log(mammals_animals);


/* 

Crea un array di oggetti che rappresentano delle persone.
Ogni persona ha un nome, un cognome e un’età.

Crea quindi un nuovo array inserendo, per ogni persona, una frase con il nome e cognome e l’indicazione se può guidare, in base all’età.
*/

// Array di oggetti che rappresentano persone
const persone = [
  { name: 'Mario', surname: 'Rossi', age: 17 },
  { name: 'Luigi', surname: 'Verdi', age: 25 },
  { name: 'Elena', surname: 'Bianchi', age: 20 },
];

// Funzione per determinare se una persona può guidare
function can_drive(age) {
  return age >= 18; // in molti paesi l'age minima per guidare è 18 anni
}

// Creazione di un nuovo array con le frasi
const people = persone.map(persona => {
  const messaggioGuida = can_drive(persona.age) ? 'può guidare.' : 'non può guidare.';
  persona.can_drive_message = `${persona.name} ${persona.surname} ${messaggioGuida}`;
  return persona;
});

console.log(people);


/* Snack  */

// Array di oggetti che rappresentano zucchine
const zucchine = [
  { varietà: 'Zucchino nero di Milano', peso: 150, lunghezza: 16 },
  { varietà: 'Zucchino romanesco', peso: 180, lunghezza: 18 },
  { varietà: 'Zucchino ortolano di Faenza', peso: 200, lunghezza: 20 },
];

// Calcolo del peso totale delle zucchine senza usare reduce
let pesoTotale = 0;
for (let i = 0; i < zucchine.length; i++) {
  pesoTotale += zucchine[i].peso;
}

console.log(`Il peso totale delle zucchine è: ${pesoTotale} grammi`);