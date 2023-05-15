function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const nameBodyColor = document.querySelector('.color');
const btnChangeColor = document.querySelector('.change-color');

btnChangeColor.addEventListener('click', () => {
  document.body.style.backgroundColor = getRandomHexColor();
  nameBodyColor.textContent = document.body.style.backgroundColor;
});
