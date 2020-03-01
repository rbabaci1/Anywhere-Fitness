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
      margin-bottom: 13px;

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
      span {
        margin-top: 5px;
      }
      #show-password {
        margin-top: 10px;
        font-size: 11px;
        flex-direction: row;
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

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    formErrors: {
      email: ''
    }
  });
  const [inputTouched, setInputTouched] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = event => {
    const { value, name } = event.target;
    const formErrors = formData.formErrors;
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (name === 'email') {
      formErrors.email = regex.test(value)
        ? ''
        : 'Please, Enter a valid email address.';
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
          email: ''
        }
      });
      setInputTouched(false);
    } else {
      // Render the Error message to the User

      if (formData.email.length === 0) {
        setFormData({
          ...formData,
          formErrors: { email: 'Please, enter your email address.' }
        });
      }
      setInputTouched(true);
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
          />
          {/* Error message for email validation */}
          {formData.formErrors.email.length > 0 && inputTouched && (
            <span style={{ color: '#da4010' }}>
              {formData.formErrors.email}
            </span>
          )}
        </label>

        <label>
          Password
          <input
            type='password'
            name='password'
            value={formData.password}
            onChange={handleChange}
            placeholder='Enter password'
            id='password'
          />
          {/* Error message for password validation */}
          {formData.password.length === 0 && inputTouched && (
            <span style={{ color: '#da4010' }}>
              Please, enter your password.
            </span>
          )}
          <label id='show-password'>
            <input type='checkbox' onClick={showPassword} />
            Show Password
          </label>
        </label>

        <div>
          <Button textContent='Log in' type='submit' />
        </div>
      </form>
    </LoginContainer>
  );
}
