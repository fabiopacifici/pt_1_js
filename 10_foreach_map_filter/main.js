//element.addEventListener(callback)

const students = ['Paolo', 'Giulia', 'Marco'];

// Foreach with anonymous funcion
students.forEach(function (element, index, array) {
  console.log(element); // paolo ...
  console.log(index);
  console.log(array);
});

//function(){}
//()=>{}

// Foreach with arrow function 
students.forEach((element, index, array) => {
  console.log(element, index, array);
});


// Paolo 0
// Giulia 1
// Marco 2

for (let i = 0; i < students.length; i++) {
  const element = students[i];

}



students.forEach((student) => {
  console.log(student);
})



// ForEach with Array of Objects

const cats = [
  { name: 'Jerry', color: 'Gray' },
  { name: 'Felix', color: 'Black and White' },
  { name: 'Garfield', color: 'Orange' },
];

cats.forEach((cat) => {
  //return cat
  console.log(`${cat.name}'s color is ${cat.color}`);
});

console.log('Out of the loop');



/* MAP 
- array.map(function(){
  //must use a return
 })

*/

const numeri = [1, 2, 3, 4, 5];



const sqr_numbs = numeri.map(function (numb) {
  console.log(numb);

  const result = numb * numb

  return result + 'ciao'

});
console.log(sqr_numbs);




const quadrati = numeri.map((numero) => {
  return numero * numero;
});
console.log(quadrati); // [1, 4, 9, 16, 25]



/* Filter 
- array.filter(function(element, index, array){
  //must use a return
})

*/

const numbs = [1, 2, 3, 4, 5];

numbs.filter(function (numb) {



});



const pari = numbs.filter((numero) => {
  if (numero % 2 === 0) {
    return true;
  }
  return false;
});
console.log(pari); // [2, 4]





// Snack 1

/* Crea un array composto da 10 automobili.
Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione(benzina, diesel, gpl, elettrico, metano).

Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.
 
Infine stampa separatamente i 3 array. */


const cars = [
  { marca: "Toyota", modello: "Corolla", alimentazione: "benzina" },
  { marca: "Ford", modello: "Fusion", alimentazione: "benzina" },
  { marca: "BMW", modello: "3 Series", alimentazione: "benzina" },
  { marca: "Volkswagen", modello: "Golf", alimentazione: "diesel" },
  { marca: "Audi", modello: "A4", alimentazione: "diesel" },
  { marca: "Tesla", modello: "Model 3", alimentazione: "elettrico" },
  { marca: "Hyundai", modello: "Elantra", alimentazione: "benzina" },
  { marca: "Kia", modello: "Forte", alimentazione: "benzina" },
  { marca: "Mitsubishi", modello: "Outlander", alimentazione: "benzina" },
  { marca: "Nissan", modello: "Altima", alimentazione: "benzina" }
];

const petrol = cars.filter(car => car.alimentazione === 'benzina')
const diesel = cars.filter(car => car.alimentazione === 'diesel')
const others = cars.filter(car => car.alimentazione !== 'diesel' && car.alimentazione !== 'benzina' )

/* const petrol_2 = cars.filter(function (car) {
  if (car.alimentazione === 'benzina') {
    return true
  }
  //return false

}) 


const petrol_2 = cars.filter(function (car) {
  if (car.alimentazione === 'diesel') {
    return true
  }
  //return false

}) 

const petrol_2 = cars.filter(function (car) {
  if (car.alimentazione !== 'benzina' && car.alimentazione !== 'diesel') {
    return true
  }
  //return false

}) 


*/


console.log(petrol, diesel, others);


/* Snacks 2 
A partire da un array di stringhe, crea un secondo array formattando le stringhe del primo array in minuscolo e con l’iniziale maiuscola.

Es: [‘pippo’, ‘PLUTO’, ‘Paperino’] => [‘Pippo’, ‘Pluto’, ‘Paperino’]


*/

const names = ['Fabio', 'seRena', 'ANTIFA']

const capitalizedNames = names.map(name => {
  // 1.Prima versione
  //const firstChar = name.charAt(0).toUpperCase()
  // cosnt restOrTheString = name.slice(1, name.length).toLowerCase()
  // const capitalizedName = firstChar + restOrTheString
  //2. seconda versione (in one line)
  
  return name.charAt(0).toUpperCase() + name.slice(1, name.length).toLowerCase()
  //using a function
  // 3. terza versione con richiamo di una funzione custom
  //return capitalize(name)

})

console.log(capitalizedNames);

// as a function

function capitalize(text) {
  return text.charAt(0).toUpperCase() + text.slice(1, text.length).toLowerCase()
}


// 4. Create a single function 
function capitalizeElements(list) {
  return list.map(name => {
    return capitalize(name)
  })
}



const newNames = capitalizeElements(names);
console.log(newNames, 'with a function');