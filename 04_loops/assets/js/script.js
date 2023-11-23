console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
console.log(6);
console.log(7);
console.log(8);
console.log(9);
console.log(10);
console.log(11);
console.log(12);
console.log(13);
console.log(14);
console.log(15);
console.log(16);
console.log(17);
console.log(18);
console.log(19);
console.log(20);


const containerEl = document.querySelector('.container');
const cardMarkup = `<div class="card my-3 p-2">Card</div>`;
containerEl.innerHTML = cardMarkup;

/* containerEl.innerHTML += cardMarkup;
containerEl.innerHTML += cardMarkup;
containerEl.innerHTML += cardMarkup;
containerEl.innerHTML += cardMarkup; */


// Loop (ciclo)
// loops over a sequence of elements

/* 
Syntax:
- for 
- ()
  - counter
  - condition
  - increment/decrement 
- { // your code here}


for (counter; condition; increment/decrement) {
  // your code here
}

*/


/* for (let i = 0; i < 10; i++ ){
  console.log(i);
  containerEl.innerHTML += cardMarkup;

}
console.log('Out of the loop'); */

//0. i = 0 ? true | run your code  | i++ (i = 0 + 1)
//1  i = 1 ? true | run you code | i++ (1 + 1)
//2. i = 2 ? true | run you code | i++ (1 + 1)
// ...
//10. i = 10 ? false | stop the loop


/* const ul = document.querySelector("ul.list");
console.log(ul); 


const li = document.createElement('li');
console.log(li);

li.append('Elemento');
ul.append(li); */


for (let index = 0; index < 10; index++) {
  const cardEl = `<div class="card my-3 p-2">Card ${index}</div>`;
  //containerEl.insertAdjacentHTML('beforeend', `<div class="card my-3 p-2">Card</div>` )
  //containerEl.insertAdjacentHTML('afterend', cardEl )

}

