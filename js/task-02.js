const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listEl = document.querySelector('#ingredients');

ingredients.forEach(ingredient => {
  let itemEl = document.createElement('li');
  itemEl.classList = 'item';
  itemEl.textContent = ingredient;
  listEl.append(itemEl);
});
