import React, { useState } from 'react';
// import axios from 'axios';
import styled from 'styled-components';
import Logo from '../../ReusableComponents/Logo';
import Button from '../../ReusableComponents/Button';
import AbsoluteWrapper from '../../ReusableComponents/AbsoluteWrapper';
import { FormDefaultStyle } from '../../ReusableStyling/FormDefaultStyle';
import { ErrorMessageStyled } from '../../ReusableStyling/ErrorMessageStyled';
import { formIsValid, showPassword } from '../../HelpersLibrary/library';
import '../SignUpPage/checkbox.css';

const LoginFormContainer = styled(FormDefaultStyle)`
  p {
    font-size: 20px;
    margin: 25px 0;
  }
  .show-password {
    margin: 10px 0 0 0;
    font-size: 11px;
    flex-direction: row;
    width: fit-content;
  }
  .button {
    margin-top: 130px;
    text-align: center;
  }

  /*********** Media queries ************/
  @media only screen and (min-width: 500px) {
    .button {
      margin-top: 70px;

      button {
        font-size: 28px;
        padding: 13px 0;
        width: 170px;
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

const initialState = {
  email: '',
  password: '',
  loading: false,
  formErrors: {
    email: '',
    password: '',
  },
};

export default function LoginPage({ history }) {
  const [formData, setFormData] = useState(initialState);
  const [inputTouched, setInputTouched] = useState(false);
  const [passwordIsShown, setPasswordIsShown] = useState(false);

  const handleChange = (event) => {
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

    setFormData({
      ...formData,
      formErrors: { email: '', password: '' },
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { email, password, formErrors } = formData;

    if (formIsValid(formErrors, email, password)) {
      // Submit the Data to Login
      // axios
      //   .post('https://anywhere-fitness1.herokuapp.com/api/auth/login', {
      //     username: formData.email,
      //     password: formData.password,
      //   })
      //   .then((res) => {
      //     localStorage.setItem('token', res.data.token);
      //     props.history.push('/succeed');
      //   })
      //   .catch((err) => console.error(err));
      setFormData({ ...formData, loading: true });

      setTimeout(() => {
        if (email === '4rabah@gmail.com' && password === '2020') {
          history.push('/InstructorHome');
          setFormData(initialState);
          setInputTouched(false);
          setPasswordIsShown(false);
        } else {
          setFormData({
            ...formData,
            loading: false,
            formErrors: { password: "That wasn't correct. Try again?" },
          });
          setInputTouched(true);
        }
      }, 1500);
    } else {
      // Render the Error message to the User

      if (!formData.email) {
        setFormData({
          ...formData,
          formErrors: { email: 'Please, enter your email address.' },
        });
      }

      setInputTouched(true);
    }
  };

  return (
    <AbsoluteWrapper>
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
            {formData.formErrors.email && inputTouched && (
              <ErrorMessageStyled>
                {formData.formErrors.email}
              </ErrorMessageStyled>
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
              className='password'
            />
            {/* Error message for password validation */}
            {passwordIsShown ? (
              <label className='show-password'>
                <input type='checkbox' onClick={showPassword} />
                <span className='checkmark'></span>
                <span id='text'>Show Password</span>
              </label>
            ) : null}
          </label>

          {formData.formErrors.password && inputTouched && (
            <ErrorMessageStyled>
              {formData.formErrors.password}
            </ErrorMessageStyled>
          )}

          <div className='button'>
            <Button
              textContent={formData.loading ? 'Loading' : 'Log in'}
              type='submit'
            />
          </div>
        </form>
      </LoginFormContainer>
    </AbsoluteWrapper>
  );
}
