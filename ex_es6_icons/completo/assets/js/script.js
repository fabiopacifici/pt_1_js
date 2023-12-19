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

// Setup
let icons = [
  {
    name: 'cat',
    prefix: 'fa-',
    type: 'animal',
    family: 'fas',
    color: generateRandomColor()
  },
  {
    name: 'crow',
    prefix: 'fa-',
    type: 'animal',
    family: 'fas',
    color: generateRandomColor()
  },
  {
    name: 'dog',
    prefix: 'fa-',
    type: 'animal',
    family: 'fas',
    color: generateRandomColor()
  },
  {
    name: 'dove',
    prefix: 'fa-',
    type: 'animal',
    family: 'fas',
    color: generateRandomColor()
  },
  {
    name: 'dragon',
    prefix: 'fa-',
    type: 'animal',
    family: 'fas',
    color: generateRandomColor()
  },
  {
    name: 'horse',
    prefix: 'fa-',
    type: 'animal',
    family: 'fas',
    color: generateRandomColor()
  },
  {
    name: 'hippo',
    prefix: 'fa-',
    type: 'animal',
    family: 'fas',
    color: generateRandomColor()
  },
  {
    name: 'fish',
    prefix: 'fa-',
    type: 'animal',
    family: 'fas',
    color: generateRandomColor()
  },
  {
    name: 'carrot',
    prefix: 'fa-',
    type: 'vegetable',
    family: 'fas',
    color: generateRandomColor()
  },
  {
    name: 'apple-alt',
    prefix: 'fa-',
    type: 'vegetable',
    family: 'fas',
    color: generateRandomColor()
  },
  {
    name: 'lemon',
    prefix: 'fa-',
    type: 'vegetable',
    family: 'fas',
    color: generateRandomColor()
  },
  {
    name: 'pepper-hot',
    prefix: 'fa-',
    type: 'vegetable',
    family: 'fas',
    color: generateRandomColor()
  },
  {
    name: 'user-astronaut',
    prefix: 'fa-',
    type: 'user',
    family: 'fas',
    color: generateRandomColor()
  },
  {
    name: 'user-graduate',
    prefix: 'fa-',
    type: 'user',
    family: 'fas',
    color: generateRandomColor()
  },
  {
    name: 'user-ninja',
    prefix: 'fa-',
    type: 'user',
    family: 'fas',
    color: generateRandomColor()
  },
  {
    name: 'user-secret',
    prefix: 'fa-',
    type: 'user',
    family: 'fas',
    color: generateRandomColor()
  }
];


/* DRAW THE SINGLE ICON */
/**
 * Create an icon element adn return it
 * @param {object} icon the icon object
 * @returns DomNode
 */
function createIconElement(icon) {
  const markup = `<div class="icon">
					<i class="fas fa-cat"></i>
					<span>Cat</span>
				</div>
        `
  // create the div.icon
  const divIconWrapperEl = document.createElement('div')
  divIconWrapperEl.className = 'icon'

  // create the i element
  const iIconEl = document.createElement('i')
  iIconEl.classList.add(icon.family, icon.prefix + icon.name)


  // append the icon 
  divIconWrapperEl.appendChild(iIconEl)

  // create the span element
  const nameEl = document.createElement('span')
  nameEl.append(icon.name.toUpperCase())
  // append the span
  divIconWrapperEl.appendChild(nameEl)

  //m2 - color the icon
  divIconWrapperEl.style.color = icon.color;


  return divIconWrapperEl;
}

/* DRAW ALL ICONS */
// select the icons wrapper
const iconsWrapper = document.querySelector('.icons');
// loop over the icons and add them to the wrapper
/* icons.forEach(icon => {
  const iconEl = createIconElement(icon)
  iconsWrapper.appendChild(iconEl)
}) */
renderIcons(icons, iconsWrapper)


/* 
Milestone 3
Aggiungere alla pagina una select in cui le options corrispondono ai vari tipi di icone (animal, vegetable, user). Quando l'utente seleziona un tipo dalla select, visualizzare solamente le icone corrispondenti.
*/

// get all unique icons types
const iconTypesList = new Set(icons.map(icon => icon.type))
console.log(iconTypesList);


// select the select element
const typesSelectEl = document.getElementById('types_filter');

// loop over the list of types
iconTypesList.forEach(type => {
  const optionEl = document.createElement('option')
  optionEl.value = type
  optionEl.innerText = type
  // append a new option element to the select 
  typesSelectEl.appendChild(optionEl)
})


// listen for when the select changes 
document.getElementById('types_filter').addEventListener('change', function (e) {
  e.preventDefault()

  // take the selected value
  console.log(e.target.value)

  // filter the icons to return only the
  newIcons = icons.filter(icon => icon.type === e.target.value || e.target.value === 'all');

  // re-render the icons again

  renderIcons(newIcons, iconsWrapper);
})


function renderIcons(iconsArray, wrapperEl) {
  wrapperEl.innerHTML = ''
  iconsArray.forEach(icon => {
    const iconEl = createIconElement(icon)
    wrapperEl.appendChild(iconEl)
  })
}


function generateRandomColor() {
  // generate random numbers between 0 and 9
  let hex = '#'
  for (let i = 0; i < 6; i++) {
    hex += Math.floor(Math.random() * 10)

  }
  return hex
}

console.log(generateRandomColor())