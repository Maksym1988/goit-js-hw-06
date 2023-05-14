function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector('input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const newBoxes = document.querySelector('#boxes');

function createBoxes(amount) {
  destroyBoxes();

  const elements = [];

  for (let i = 0; i < amount; i += 1) {
    const element = document.createElement('div');
    element.style.width = `${30 + i * 10}px`;
    element.style.height = `${30 + i * 10}px`;
    element.style.backgroundColor = getRandomHexColor();
    elements.push(element);
  }

  newBoxes.append(...elements);
}

function destroyBoxes() {
  newBoxes.innerHTML = '';
  input.value = '';
}

createBtn.addEventListener('click', () => {
  createBoxes(input.value);
});

destroyBtn.addEventListener('click', destroyBoxes);
