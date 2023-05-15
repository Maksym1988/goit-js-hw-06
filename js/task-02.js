const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listEl = document.querySelector('#ingredients');
const items = [];

ingredients.forEach(ingredient => {
  let itemEl = document.createElement('li');
  itemEl.classList = 'item';
  itemEl.textContent = ingredient;
  items.push(itemEl);
});

listEl.append(...items);
