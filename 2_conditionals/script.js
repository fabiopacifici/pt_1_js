/*


Conditional statement 
- if
- (condition)
- {
  // your code here
}



// Syntax
if (condition) {
  // your code here
} */


// Example 1 (if only)
const x = 1;
// condition: 11 > 10 ? true
// condition: 1 > 10 ? false
/* if (x > 10) {
  // your code here
  console.log('I am running');
}

console.log('Outside'); */

// Example 2 (if/else)
/* 
if (x > 10) {
  // your code here
  console.log('I am running');
} else {
  console.log('Otherwise i walk');
}

console.log('Outside');

 */



// condition: 1 > 10 ? false 
// condion: 1 < 10 ? true
if (x > 10) {
  // your code here
  console.log('I am running');
} else if (x < 10) {
  console.log('Sitting on a couch');
}

console.log('here');

/* Logic Operators 


if(condition && condition) {

} else if( condition || condition) {
  
} else if (!condtion){

} else {

}

*/



const username = prompt('Type your name, at least 4 characters');

console.log(username.length);

if (username.length > 4) {

  alert(`👍 validation passed ${username.length}`);

} else {

  alert('👎 Validation failed')

}



/* 

if(condition) {
  // code here
} else {
  // code here
}

// ternary operator
if -> ?
else -> :

x > 10 ? 'bg-primary' : 'bg-danger'


*/

let numb = 7;
`<div class="${numb > 10 ? 'bg-primary' : 'bg-danger' }">Example</div>`


