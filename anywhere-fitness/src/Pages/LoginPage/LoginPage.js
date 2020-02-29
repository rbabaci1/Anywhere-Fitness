import React, { useState } from 'react';
import styled from 'styled-components';

import Logo from '../../ReusableComponents/Logo';
import Button from '../../ReusableComponents/Button';

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    width: 344px;
    font-size: 20px;
    line-height: 23px;
    text-align: center;
    letter-spacing: 0.36px;
    color: #f7f7f7;
  }

  form {
    display: flex;
    flex-direction: column;
    width: 330px;
    margin-top: 30px;
    label {
      display: flex;
      flex-direction: column;
      color: #f7f7f7;
      font-size: 17px;
      font-weight: normal;
      line-height: 20px;
      letter-spacing: 0.36px;
      margin-bottom: 10px;

      input {
        border-radius: 3px;
        box-sizing: border-box;
        border: 2px solid #787777;
        padding: 10px 6px;
        font-size: 17px;
        background: inherit;
        color: #f7f7f7;
        font-family: Ubuntu;
      }
    }
    div {
      margin-top: 150px;
      text-align: center;
    }
  }
`;

const formValid = (formErrors, email, password) => {
  let isValid = true;

  if (email.length === 0 || password.length === 0) {
    return false;
  }
  Object.values(formErrors).forEach(
    value => value.length > 0 && (isValid = false)
  );

  return isValid;
};

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    formErrors: {
      email: '',
      password: ''
    }
  });
  const [inputTouched, setInputTouched] = useState(false);

  const handleChange = event => {
    const { value, name } = event.target;
    const formErrors = formData.formErrors;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

    if (name === 'email') {
      formErrors.email = emailRegex.test(value)
        ? ''
        : 'Please, Enter a valid email address.';
    } else {
      formErrors.password = passwordRegex.test(value)
        ? ''
        : 'Must Contain 8 Characters, 1 Uppercase, 1 Lowercase, 1 Number and 1 special case Character.';
    }

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (formValid(formData.formErrors, formData.email, formData.password)) {
      // Submit the Data to Login

      setFormData({
        email: '',
        password: '',
        formErrors: {
          email: '',
          password: ''
        }
      });
    } else {
      // Render the Error message to the User
      console.log(formData.formErrors);
      console.log('something wrong');
    }
  };

  return (
    <LoginContainer>
      <Logo />

      <p>Log in by providing the information below</p>

      <form onSubmit={handleSubmit} noValidate>
        <label>
          Email
          <input
            type='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            placeholder='Enter email'
            required
          />
        </label>

        <label>
          Password
          <input
            type='password'
            name='password'
            value={formData.password}
            onChange={handleChange}
            placeholder='Enter password'
            required
          />
        </label>

        <div>
          <Button textContent='Log in' type='submit' />
        </div>
      </form>
    </LoginContainer>
  );
}
