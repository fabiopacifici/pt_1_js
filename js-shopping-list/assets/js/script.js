console.log('Hello, world!');

/* 
Define the data structure
 */
const products = [
  {
    id: 1,
    name: 'Latte',
    categories: ['bevande', 'colazione'],
    checked: true
  },
  {
    id: 2,
    name: 'Biscotti',
    categories: ['dolci'],
    checked: false
  },
  {
    id: 3,
    name: 'Pomodori',
    categories: ['verdure'],
    checked: false
  },

];


console.table(products);

const checked = [1]

const listElement = document.querySelector('.list')


/* 
Render items into the dom
*/
products.forEach(product => {
  console.log(product);
  const { id, name, categories } = product

  console.log(id, name, categories);
  console.log(isChecked(product));

  // create a product item
  // Con template literal o con createElement
  const markup = `<li class="${isChecked(product) ? 'checked' : '' }">
			<i class="fas fa${isChecked(product) ? '-check' : ''}-square"></i>
			${name} (${categories.join(', ')})
		</li>
  `;
  
  console.log(markup);

  listElement.insertAdjacentHTML('beforeend', markup)



});

function isChecked(product){
  return checked.includes(product.id)
}


/*  */