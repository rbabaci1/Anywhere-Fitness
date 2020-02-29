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

const formValid = formErrors => {
  const valid = true;

  Object.values(formErrors).forEach(
    value => value.length > 0 && (valid = false)
  );

  return valid;
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

  const handleChange = event => {
    const { value, name } = event.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (formValid(formData.formErrors)) {
      console.log(`submitting email: ${formData.email}`);
      console.log(`submitting Password: ${formData.password}`);
    } else {
      console.log('Form Error');
    }

    setFormData({
      email: '',
      password: '',
      formErrors: {
        email: '',
        password: ''
      }
    });
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
        </label>

        <label>
          Password
          <input
            type='password'
            name='password'
            value={formData.password}
            onChange={handleChange}
            placeholder='Enter password'
          />
        </label>

        <div>
          <Button textContent='Log in' type='submit' />
        </div>
      </form>
    </LoginContainer>
  );
}
