import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link, Route } from 'react-router-dom';
import { Form, Field, withFormik } from 'formik';
import * as yup from 'yup';
import axios from 'axios';

import Logo from '../../ReusableComponents/Logo';
import Button from '../../ReusableComponents/Button';
import { FormDefaultStyle } from '../../ReusableComponents/FormDefaultStyle';

import { showPassword } from '../../functionsLibrary/library';

const FormContainer = styled.div`
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

      .show-password {
        flex-direction: row;
        margin: 10px 0 0 0;
        font-size: 11px;
      }
    }
    a {
      text-align: center;
    }
    button {
      margin-top: 100px;
      align-self: center;
    }
  }
`;

function SignUpForm({ values, match }) {
  const { userType } = match.params;

  return (
    <FormContainer>
      <Logo />

      <p>Create an account by providing the information below</p>

      <Form>
        <label>
          Name
          <Field type='text' name='name' placeholder='Enter name' />
        </label>

        <label>
          Email
          <Field type='email' name='email' placeholder='Enter email' />
        </label>

        <label>
          Password
          <Field
            type='password'
            name='password'
            placeholder='Enter password'
            id='password'
          />
          {values.password.length > 0 && (
            <label className='show-password'>
              <input type='checkbox' onClick={showPassword} />
              Show Password
            </label>
          )}
        </label>

        {userType === 'instructor' ? (
          <Link
            to={{
              pathname: '/accountType/instructor/signUp/MoreInfo',
              state: {
                firstFormValues: values
              }
            }}
          >
            <Button textContent='Sign up!' type='button' />
          </Link>
        ) : (
          <Button textContent='Sign up!' type='submit' />
        )}
      </Form>
    </FormContainer>
  );
}

export default withFormik({
  mapPropsToValues: () => ({
    name: '',
    email: '',
    password: ''
  }),
  handleSubmit: (values, formikBag) => {
    const { resetForm, props } = formikBag;
    const { userType } = props.match.params;
    console.log(userType);

    if (userType === 'client') {
      // Post the data to the database

      console.log(values);
    }
    resetForm();
  }
})(SignUpForm);
