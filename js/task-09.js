function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyColor = document.querySelector('.widget');
const nameBodyColor = document.querySelector('.color');
const btnChangeColor = document.querySelector('.change-color');

btnChangeColor.addEventListener('click', () => {
  bodyColor.parentNode.style.backgroundColor = getRandomHexColor();
  nameBodyColor.textContent = getRandomHexColor();
});
