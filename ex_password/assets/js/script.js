console.log('Hello, world!');


/* 

Chiedi all’utente il suo nome,
poi chiedi il suo cognome,
poi chiedi il suo colore preferito
Infine scrivi sulla pagina nomecognomecolorepreferito23

Ad esempio se scrivessi:
fabio
pacifici
blue
la password che esce fuori sará:
fabiopacificiblue23
confermate lettura come al solito e buon divertimento con
Javascript, anzi no, con ECMAScript, anzi no, con ES6... 

 */


/* 

Tools:
- prompt
- const/let
- backticks `${}`
- document.getElementById('my_id').innerHTML

*/
// Chiedi all’utente il suo nome e lo salvo in una variabile,
const user_name = prompt('Come ti chiami?');

// poi chiedi il suo cognome,
const user_lastname = prompt('Quale é il tuo cognome?');

// poi chiedi il suo colore preferito
const user_favourite_color = prompt('Quale é il tuo colore preferito?');

//console.log(user_name, user_lastname, user_favourite_color, 23);

const password = user_name + user_lastname + user_favourite_color + '23';

console.log(password);

// Infine scrivi sulla pagina nomecognomecolorepreferito23
const passwordElement = document.getElementById('password')

passwordElement.innerHTML = password;