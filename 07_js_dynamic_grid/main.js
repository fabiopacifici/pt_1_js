console.log('hi');



/* 

Creare in JavaScript una griglia 8x8. 
Ogni cella della griglia contiene un numero casuale da 1 a 64. 
I numeri presenti nelle celle non devono essere ripetuti (ovvero la griglia contiene tutti i numeri da 1 a 64). 

Ogni volta che clicco su un quadrato
- questo si colora di verde se il numero contenuto e pari 
- o in rosso se dispari

<div class="box">1</div>



// Tools:
- document.querySelector('.container')
- for
- let/const
- Math.random()
- if/else
- element.addEventListener()
- functions
- module operator %
- array
- classList
- append



  if(!gridNumbers.includes(randomNumber)){
    gridNumbers.push(randomNumber);

  }


*/




// Setup
const gridLimit = 64;
const conteinerEl = document.querySelector('.container');
const randomNumbers = getRandomGridNumbers(gridLimit)

// generate the grid 
for (let i = 0; i < randomNumbers.length; i++) {
  //console.log(i);

  const randomNumber = randomNumbers[i];

  // 👇 After a box has been created we had a dom node
  const boxElement = generateBoxCell(randomNumber);

  // 👂 We can add an event listener to the node
  boxElement.addEventListener('click', function(e){
    // ✌ ways to retrieve the clicked element
    // event.target e this
    console.log(e.target, this);
  })

  // add the single cell to the grid
  conteinerEl.append(boxElement)

}


/**************************************************/
// if have enought time review the loop used in 
// the previous lesson
// and explain the solution above
/*************************************************/

//const gridNumbers = []; // .length 0


/* while (gridNumbers.length < 64) {
    const randomNumber = generateRandomNumber(1, gridLimit);

    console.log(randomNumber, 'random number');
  
    if (!gridNumbers.includes(randomNumber)) {
      
      console.log(randomNumber, 'inside the if');

      gridNumbers.push(randomNumber)

      console.log(gridNumbers, 'the whole array');
    }

    console.log(gridNumbers.length);

}
 */

// 👆 👇 The loop above has been refactored in the function below

/**
 * Generates an array of random numbers withing a limit
 * @param {number} limit The limit of numbers to generate
 * @returns 
 */
function getRandomGridNumbers(limit) {
  const gridNumbers = []; // .length 0

  while (gridNumbers.length < limit) {
    const randomNumber = generateRandomNumber(1, limit);

    if (!gridNumbers.includes(randomNumber)) {

      gridNumbers.push(randomNumber)

    }

  }
  return gridNumbers

}


/**
 * Generate Box Cell
 * Generate a dom element with class box and returns it
 * @param {number} numb The number to insert into the cell
 * @returns Object
 */
function generateBoxCell(numb){
  const boxElement = document.createElement('div');
  boxElement.className = 'box';
  boxElement.innerText = numb;
  //console.log(boxElement);
  return boxElement;
}



/**
 * Generates a random number
 * between a min and max range
 * @param {number} min The minimum range for the random number
 * @param {number} max The max range
 * @returns {number}
 */
function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


