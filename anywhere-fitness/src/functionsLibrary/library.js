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

export { formIsValid, showPassword };
