import React, { useState } from 'react';
import styled from 'styled-components';

import Logo from '../../ReusableComponents/Logo';
import Button from '../../ReusableComponents/Button';
import ClientHomePage from '../ClientHomePage/ClientHomePage';
import InstructorHomePage from '../InstructorHomePage/InstructorHomePage';

import { FormDefaultStyle } from '../../ReusableStyling/FormDefaultStyle';
import { ErrorMessageStyled } from '../../ReusableStyling/ErrorMessageStyled';
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
    .button {
      margin-top: 100px;

      button {
        font-size: 30px;
        padding: 15px 0;
        width: 180px;
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
      console.log(formData);
      // Submit the Data to Login

      setFormData({
        email: '',
        password: '',
        formErrors: {
          email: ''
        }
      });
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
            <ErrorMessageStyled>{formData.formErrors.email}</ErrorMessageStyled>
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
            <ErrorMessageStyled>
              Please, enter your password.
            </ErrorMessageStyled>
          )}
          {passwordIsShown ? (
            <label className='show-password'>
              <input type='checkbox' onClick={showPassword} />
              <span className='checkmark'></span>
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
