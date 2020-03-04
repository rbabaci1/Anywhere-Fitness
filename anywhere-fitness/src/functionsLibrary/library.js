const formIsValid = (formErrors, email, password) => {
  let isValid = true;

  if (email.length === 0 || password.length === 0) {
    isValid = false;
  }
  Object.values(formErrors).forEach(
    value => value.length > 0 && (isValid = false)
  );

  return isValid;
};

const showPassword = () => {
  const password = document.getElementById('password');

  password.type === 'password'
    ? (password.type = 'text')
    : (password.type = 'password');
};

const toggleActive = (event, setValues, values) => {
  let yes = document.getElementById('yes');
  let no = document.getElementById('no');

  if (event.target.textContent === 'Yes') {
    setValues({ ...values, isCertified: true });

    event.target.classList.add('selected');
    no.classList.remove('selected');
  } else {
    setValues({ ...values, isCertified: false });

    event.target.classList.add('selected');
    yes.classList.remove('selected');
  }
};

const removeActive = () => {
  const yes = document.getElementById('yes');
  const no = document.getElementById('no');
  yes.classList.remove('selected');
  no.classList.add('selected');
};

export { formIsValid, showPassword, toggleActive, removeActive };
