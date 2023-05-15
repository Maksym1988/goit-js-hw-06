const navItemEl = document.querySelectorAll('#categories .item');

console.log(`Number of categories: ${navItemEl.length}`);

navItemEl.forEach(item => {
  console.log(`Category: ${item.firstElementChild.textContent}`);
  console.log(`Elements: ${item.lastElementChild.children.length}`);
});
