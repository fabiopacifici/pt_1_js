console.log('Hello, world!');

/* 
**Consegna:**

Scrivi un programma che stampi in console i numeri da 1 a 100,
ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.



**BONUS 1:**
Crea un container nel DOM , aggiungendo (attraverso la funzione `append()`) un elemento html con il numero o la stringa corretta da mostrare.

**BONUS 2:**
Applica stili differenti agli elementi aggiunti al DOM nel *BONUS 1*, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz. 
Se sei a corto di idee per lo stile, potresti prendere spunto dallo screenshot fornito in consegna.



## Tools:
- for loop
- console.log
- if/else
- %

*/

const containerEl = document.querySelector('.container')

for (let i = 1; i <= 100; i++) {
  //console.log(i);

  const boxEl = document.createElement('div')
  boxEl.classList.add('box')

  // i % 3 === 0 && i % 5 === 0
  // or the equivalent would be: i % 15 === 0
  if (i % 3 === 0 && i % 5 === 0) {
    console.log('FizzBuzz', i);
    boxEl.innerText = 'FizzBuzz';
    //boxEl.style.backgroundColor = 'red'
    boxEl.classList.add('box-fizzbuzz')
  } else if (i % 3 === 0) {
    console.log('Fizz', i);
    boxEl.innerText = 'Fizz';
    boxEl.classList.add('box-fizz')

  } else if (i % 5 === 0) {
    console.log('Buzz', i);
    boxEl.innerText = 'Buzz';
    boxEl.classList.add('box-buzz')

  } else {
    console.log(i);
    boxEl.innerText = i;
    boxEl.classList.add('box-default')

  }

  containerEl.append(boxEl)
}