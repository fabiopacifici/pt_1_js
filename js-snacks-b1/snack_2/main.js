/* 

L’utente inserisce due parole in successione, con due prompt.
Il software stampa prima la parola più corta, poi la parola più lunga.

*/


const word_1 = 'Lorem';
const word_2 = 'ipsu';


if(word_1.length > word_2.length) {
  console.log(word_2, word_1);

} else if (word_2.length > word_1.length ) {
  console.log(word_1, word_2);

} else {
  console.log('Le parole hanno la stessa lunghezza', word_1, word_2);
}