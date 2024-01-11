const listContainer = document.getElementById('shopping-list');
const typesFilterSelect = document.querySelector('#types-filter');
const checkedFilter = document.querySelector('#checked-filter');

const list = [
  {
    id: 1,
    name: 'Latte',
    types: ['bevande', 'colazione']
  },
  {
    id: 2,
    name: 'Cacao',
    types: ['dolci']
  },
  {
    id: 3,
    name: 'Carote',
    types: ['verdure']
  }
];

const types = ['bevande', 'colazione', 'dolci', 'verdure'];

let checked = [2];

/**
 * Checks if an item id is in an array called checked
 * Attention (checked is a global variable)
 * @param {Object} item 
 * @returns {Boolean}
 */
function isChecked(item) {
  return checked.includes(item.id);
}


function filterByType(arr, type) {
  if (!type) return arr;
  return arr.filter((item) => item.types.includes(type));
}

function filterOnlyChecked(arr) {
  return arr.filter((item) => checked.includes(item.id));
}

function applyFilters() {
  const type = typesFilterSelect.value;
  const onlySaved = checkedFilter.checked;

  let filteredItems;
  filteredItems = filterByType(list, type);

  if (onlySaved) {
    filteredItems = filterOnlyChecked(filteredItems);
  }

  if (filteredItems.length > 0) {
    renderItems(filteredItems);
    enableCheckedEvent();
  } else {
    noItemsToShow();
  }
}

function enableCheckedEvent() {
  const items = document.querySelectorAll('ul > li');
  items.forEach((item) => {
    item.addEventListener('click', () => {
      if (isChecked(item)) return;
      const id = Number(item.dataset.id);
      checked.push(id);
      console.log('cheked', checked);
      item.classList.add('checked');
    })
  });
}

function noItemsToShow() {
  listContainer.innerHTML = '<h3>No items here :(</h3>';
}

function renderItems(items) {
  listContainer.innerHTML = '';

  items.forEach(function (item) {
    const { id, name, types } = item;

    listContainer.innerHTML += `
      <li class="${isChecked(item) ? 'checked' : ''}" data-id="${id}" >
        ${name} (${types.map((type) => type).join(', ')})
      </li>`;
  });
}

// init
typesFilterSelect.addEventListener('change', applyFilters);
checkedFilter.addEventListener('change', applyFilters);

renderItems(list);
enableCheckedEvent();