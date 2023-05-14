const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const email = event.currentTarget.elements.email.value;
  const password = event.currentTarget.elements.password.value;

  if (email === '' || password === '') {
    return alert('All fields must be filled!!!');
  }

  const formData = {
    Email: email,
    Password: password,
  };

  console.log(formData);
  event.currentTarget.reset();
}
