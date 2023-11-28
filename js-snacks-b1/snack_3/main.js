/* 

Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.

*/

let sum = 0;

for (let i = 0; i < 2; i++) {
  const numb = Number(prompt('Type a number'));
  console.log(numb);

  //sum = sum + numb; 
  sum += numb;

}

console.log(sum);