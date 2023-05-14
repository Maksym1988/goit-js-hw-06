const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

nameInput.addEventListener('input', event => {
  if (nameInput === null) {
    nameOutput.textContent = 'Anonymous';
  } else {
    nameOutput.textContent = event.currentTarget.value;
  }
});
