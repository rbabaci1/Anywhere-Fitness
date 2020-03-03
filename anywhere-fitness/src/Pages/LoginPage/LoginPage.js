import React, { useState } from 'react';
import styled from 'styled-components';

import Logo from '../../ReusableComponents/Logo';
import Button from '../../ReusableComponents/Button';

import { FormDefaultStyle } from '../ReusableStyling/FormDefaultStyle';
import { formIsValid, showPassword } from '../../functionsLibrary/library';
import '../SignUpPage/checkbox.css';

const LoginFormContainer = styled(FormDefaultStyle)`
  p {
    font-size: 20px;
  }
  .show-password {
    margin: 10px 0 0 0;
    font-size: 11px;
    flex-direction: row;
    width: fit-content;
  }
  .button {
    margin-top: 170px;
    text-align: center;
  }

  /*********** Media queries ************/
  @media only screen and (min-width: 500px) {
    h1 {
      font-size: 45px;
      line-height: 50px;
    }
    p {
      font-size: 25px;
      width: 90%;
      line-height: 30px;
    }
    form {
      width: 90%;
      max-width: 700px;

      label {
        font-size: 24px;
        margin-bottom: 30px;

        input {
          margin-top: 5px;
          height: 60px;
          font-size: 22px;
        }
      }
    }
    .button {
      margin-top: 100px;

      button {
        font-size: 30px;
        padding: 15px 0;
        width: 180px;
      }
      button:hover {
        background: #820e22;
      }
    }
    .show-password {
      font-size: 20px;
      margin-top: 12px;

      #text {
        margin: 5px 0 0 5px;
      }
    }
  }
`;

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    formErrors: {
      email: ''
    }
  });
  const [inputTouched, setInputTouched] = useState(false);
  const [passwordIsShown, setPasswordIsShown] = useState(false);

  const handleChange = event => {
    const { value, name } = event.target;
    const formErrors = formData.formErrors;
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (name === 'email') {
      formErrors.email = regex.test(value)
        ? ''
        : 'Please, Enter a valid email address.';
    } else {
      setPasswordIsShown(true);
    }

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (formIsValid(formData.formErrors, formData.email, formData.password)) {
      // Submit the Data to Login

      setTimeout(() => {
        setFormData({
          email: '',
          password: '',
          formErrors: {
            email: ''
          }
        });
      }, 3000);

      setInputTouched(false);
      setPasswordIsShown(false);
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
    <LoginFormContainer>
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
          {passwordIsShown ? (
            <label className='show-password'>
              <input type='checkbox' onClick={showPassword} />
              <span class='checkmark'></span>
              <span id='text'>Show Password</span>
            </label>
          ) : null}
        </label>

        <div className='button'>
          <Button textContent='Log in' type='submit' />
        </div>
      </form>
    </LoginFormContainer>
  );
}
