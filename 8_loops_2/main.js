/* Loops */


// For loop (un loop perfetto se hai un contatore e sai quante volte il ciclo deve girate )


for(let i = 0; i < 10; i++){
  console.log(i);
}

// While loop (un ciclo perfetto se non sai quante volte deve girare)

let i = 0;

while ( i < 10) {
  console.log(i);


  // Instruzione che permette al loop di terminare 
  // increment/decrement (😈 non dimenticare se non vuoi un loop infinito)
  i++
}






// game
let play = true;
while (play) {
  
  const typeNumber = Number(prompt('Type a number'));


  if(typeNumber % 2 === 0) {
     alert('Il numero é pari')
  } else {
    alert('Il numero é dispari')
  }



  // Instruzione che permette al loop di terminare 
  play = confirm('Vuoi continuare a giocare?')
}

