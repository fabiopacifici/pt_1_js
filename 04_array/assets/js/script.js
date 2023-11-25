console.log('Hello, world!');


/* Array syntax 
[element, element, element, element]

- []
- element
- ,

I can store inside an array different data types like:
- strings
- numbers
- array
- objects

// rappresentation of syntax
const array_di_stringhe = ['string', 'strin','string']
const array_of_numbers = [1, 2,4, 5,7]
const mixed_array = ['string', 1, 'string', 2, 'string', 50]
const mixed_array_with_other_data_types = ['string', 1, array, object]

*/



const names = ['Fabio', 'Mario', 'Serena', 'Luke'] // array of strings
const numbers = [1, 20, 44, 55, 100] // array of numbers
const mixed_data = ['Fabio', 43, ['laptop', 'screens', 'phone']]

console.log('Sono una stringa');
console.log('Sono un numero', 10);
console.log('Sono un array di strings', names);
console.log(names.length)
console.log('Sono un array of numbers', numbers);
console.log(numbers.length);
console.log('Sono un array di mixed_data', mixed_data);
console.log(mixed_data.length);




// Read array elements
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
console.log(names[3]);


console.log(mixed_data[0]);
console.log(mixed_data[1]);
console.log(mixed_data[2]);


// Add element to the array (using array methods)
//names.push('Martin'); // adds elements at the end of the array
//names.unshift('Doc') // adds elements at the start of the array


console.log(names);

// Array with for loop 
// names.lenght = 4
// condition:  i < 4 
// 1. i = 0  | names[0] = Fabio
// 2. i = 1 | names[1] = Mario
// 3. i = 2 | names[2] = Serena
// 4. i = 3 | names[3] = Luke
// 5. ? 4 < 4 = false | loops ends


for (let i = 0; i < names.length; i++) {
  const element = names[i]; 

  console.log(element);

}



for (let i = 0; i < mixed_data.length; i++) {
  const element = mixed_data[i];
  console.log(element);

}

// loop over a string
const text = 'lorep ipsum dolor" ?SDf .s df';
console.log(text[0]);



for (let index = 0; index < text.length; index++) {
  const character = text[index];
  console.log(character);
}
