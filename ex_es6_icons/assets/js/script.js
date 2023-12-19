console.log('Hello, world!');
/* 

Milestone 1
Partendo dalla struttura dati fornita, visualizzare in pagina un box per ogni icona, in cui è presente il nome dell'icona e l'icona stessa.


Milestone 2
Ciascuna icona ha una proprietà "color": utilizzare questa proprietà per visualizzare le icone del colore corrispondente.


Milestone 3
Aggiungere alla pagina una select in cui le options corrispondono ai vari tipi di icone (animal, vegetable, user). Quando l'utente seleziona un tipo dalla select, visualizzare solamente le icone corrispondenti.



BONUS
1 - modificare la struttura dati fornita e valorizzare la proprietà "color" in modo dinamico: generare in modo casuale un codice colore, sapendo che la notazione esadecimale è formata dal simbolo "#" seguito da 6 caratteri alfanumerici compresi tra 0 e 9 e A e F.
2 - popolare le options della select della milestone 3 dinamicamente.


Consigli del giorno
Come sempre, iniziamo prima di tutto dall'analisi e comprensione della consegna. Scomponiamo il problema in micro-passaggi logici che solamente in un secondo momento trasformeremo in codice.
Le icone presenti nella struttura dati fanno riferimento alla nota libreria Font Awesome, perciò come prima cosa assicuriamoci di aver inserito il link alla cdn nell'head della pagina. Dopodiché, basandoci sul codice di riferimento nel sito di Font Awesome, analizziamo come è formato il tag <i> di un'icona qualsiasi, in particolare focalizziamoci sulle classi.
Come possiamo usare i dati presenti nella nostra struttura dati per creare l'elemento html nel modo corretto e visualizzare l'icona in pagina?
Inizialmente può essere sufficiente stampare dei semplici div, senza alcuno stile, con all'interno l'icona e uno span con il nome.
Solamente quando la parte logica è completa, ci dedichiamo al css.
NB: L'esercizio My Team con array di oggetti e questo sulle icone sono due esercizi chiave per poter svolgere la milestone che incombe. Dedicateci del tempo e approfondite gli argometi trattati.

DATI:


*/

const icons = [
  {
    name: 'cat',
    prefix: 'fa-',
    type: 'animal',
    family: 'fas',
    color: generateHexColor()
  },
  {
    name: 'crow',
    prefix: 'fa-',
    type: 'animal',
    family: 'fas',
    color: generateHexColor()
  },
  {
    name: 'dog',
    prefix: 'fa-',
    type: 'animal',
    family: 'fas',
    color: generateHexColor()
  },
  {
    name: 'dove',
    prefix: 'fa-',
    type: 'animal',
    family: 'fas',
    color: generateHexColor()
  },
  {
    name: 'dragon',
    prefix: 'fa-',
    type: 'animal',
    family: 'fas',
    color: generateHexColor()
  },
  {
    name: 'horse',
    prefix: 'fa-',
    type: 'animal',
    family: 'fas',
    color: generateHexColor()
  },
  {
    name: 'hippo',
    prefix: 'fa-',
    type: 'animal',
    family: 'fas',
    color: generateHexColor()
  },
  {
    name: 'fish',
    prefix: 'fa-',
    type: 'animal',
    family: 'fas',
    color: generateHexColor()
  },
  {
    name: 'carrot',
    prefix: 'fa-',
    type: 'vegetable',
    family: 'fas',
    color: generateHexColor()
  },
  {
    name: 'apple-alt',
    prefix: 'fa-',
    type: 'vegetable',
    family: 'fas',
    color: generateHexColor()
  },
  {
    name: 'lemon',
    prefix: 'fa-',
    type: 'vegetable',
    family: 'fas',
    color: generateHexColor()
  },
  {
    name: 'pepper-hot',
    prefix: 'fa-',
    type: 'vegetable',
    family: 'fas',
    color: generateHexColor()
  },
  {
    name: 'user-astronaut',
    prefix: 'fa-',
    type: 'user',
    family: 'fas',
    color: generateHexColor()
  },
  {
    name: 'user-graduate',
    prefix: 'fa-',
    type: 'user',
    family: 'fas',
    color: generateHexColor()
  },
  {
    name: 'user-ninja',
    prefix: 'fa-',
    type: 'user',
    family: 'fas',
    color: generateHexColor()
  },
  {
    name: 'user-secret',
    prefix: 'fa-',
    type: 'user',
    family: 'fas',
    color: generateHexColor()
  }
];


/* 
icon = {
    name: 'user-secret',
    prefix: 'fa-',
    type: 'user',
    family: 'fas',
    color: generateHexColor()
  }

*/




/* 🤓 Generates all icons */
// select the dom element where add all icons
const iconsWrapperEl = document.querySelector('.icons');

renderIcons(icons, iconsWrapperEl)
/* icons.forEach(icon => {
  console.log(icon);

  const iconEl = generateIcon(icon)
  console.log(iconEl);
  
  iconsWrapperEl.appendChild(iconEl)

}) */




/* Milestone 3
Aggiungere alla pagina una select in cui le options corrispondono ai vari tipi di icone(animal, vegetable, user).Quando l'utente seleziona un tipo dalla select, visualizzare solamente le icone corrispondenti. 

BONUS
1 - modificare la struttura dati fornita e valorizzare la proprietà "color" in modo dinamico: generare in modo casuale un codice colore, sapendo che la notazione esadecimale è formata dal simbolo "#" seguito da 6 caratteri alfanumerici compresi tra 0 e 9 e A e F.
2 - popolare le options della select della milestone 3 dinamicamente.

*/


// select the select element on the page
// add a change event listener
document.getElementById('icon_type').addEventListener('change', function(e){
  console.log(e);
  // log to the console the option selected by the user

  console.log(e.target.value);


  const filteredIcons = icons.filter(icon => {
    return icon.type === e.target.value || e.target.value === 'all'
  })


  console.log(filteredIcons);

  iconsWrapperEl.innerHTML = ''

  renderIcons(filteredIcons, iconsWrapperEl)



})



/* Bonus 2. */
// get unique types
/* const typesList = icons.map(icon => icon.type);
console.log(typesList);

const types = []
typesList.forEach(typeText => {
  if(!types.includes(typeText)){
    types.push(typeText)
  }
})

console.log(types); */


const typesList = new Set(icons.map(icon => icon.type));
console.log(typesList);

const selectEl = document.getElementById('icon_type')
/* typesList.forEach(optionValue => {

    const optionEl = document.createElement('option')
  optionEl.value = optionValue
  optionEl.innerText = optionValue

  selectEl.appendChild(optionEl)

}) */



renderFilterOptions(typesList, selectEl )






function generateHexColor(){

  let hex = '#'
  for (let i = 0; i < 6; i++) {
    const randNumb = Math.floor(Math.random() * 10)
    console.log(randNumb);
    hex += randNumb
  }

  console.log(hex);
  return hex
}




/* 
1 - modificare la struttura dati fornita e valorizzare la proprietà "color" in modo dinamico: generare in modo casuale un codice colore, sapendo che la notazione esadecimale è formata dal simbolo "#" seguito da 6 caratteri alfanumerici compresi tra 0 e 9 e A e F.

*/








/**
 * Renders all options in a select dynamically
 * @param {Array} optionsList A list of strings
 * @param {object} selectDomEl The select dom element where append all options
 */
function renderFilterOptions(optionsList, selectDomEl) {
  optionsList.forEach(optionValue => {

    const optionEl = document.createElement('option')
    optionEl.value = optionValue
    optionEl.innerText = optionValue

    selectDomEl.appendChild(optionEl)

  })

}



/**
 * Generates the markup for an icon
 * given its icon object with specific properties
 * @param {object} icon The icon object
 * @returns object
 */
function generateIcon(icon) {
  /* return `<div class="icon">
          <i class="${icon.family} ${icon.prefix + icon.name}"></i>
          <span>${icon.name}</span>
        </div>` */


  // create the icon wrapper
  const iconDivEl = document.createElement('div')
  iconDivEl.classList.add('icon') //<div class="icon"></div>
  //console.log(iconDivEl);


  /* M.2 Milestone 2 colora l'icona */
  iconDivEl.style.color = icon.color;



  // create the fa icon
  const iEl = document.createElement('i')
  iEl.classList.add(icon.family, icon.prefix + icon.name)

  //console.log(iEl);


  // create the span element with the icon name
  const spanEl = document.createElement('span')
  spanEl.innerText = icon.name


  // append the icon element
  iconDivEl.appendChild(iEl)

  // append the name element
  iconDivEl.appendChild(spanEl)

  return iconDivEl


}



/**
 * Renders a list of iconst into the dom element provided
 * @param {Array} iconsList A an of icons objects
 * @param {object} domElement the node where append all icons
 */
function renderIcons(iconsList, domElement) {
  iconsList.forEach(icon => {
    //console.log(icon);

    const iconEl = generateIcon(icon)
    //console.log(iconEl);

    domElement.appendChild(iconEl)

  })
}

