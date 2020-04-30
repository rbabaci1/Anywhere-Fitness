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
  const password = document.querySelector('.password');

  password.type === 'password'
    ? (password.type = 'text')
    : (password.type = 'password');
};

const toggleActive = (event, setValues, values) => {
  const yes = document.querySelector('.yes');
  const no = document.querySelector('.no');

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

export { formIsValid, showPassword, toggleActive };
