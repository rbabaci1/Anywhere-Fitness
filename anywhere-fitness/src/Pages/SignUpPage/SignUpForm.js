import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Form, Field, withFormik } from 'formik';
import * as yup from 'yup';
import axios from 'axios';

import Logo from '../../ReusableComponents/Logo';
import Button from '../../ReusableComponents/Button';

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

      #show-password {
        flex-direction: row;
        margin: 10px 0 0 0;
        font-size: 11px;
      }
    }
    div {
      margin-top: 150px;
      text-align: center;
    }
  }
`;

function SignUpForm(props) {
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
          {props.values.password.length > 0 && (
            <label id='show-password'>
              <input type='checkbox' onClick={showPassword} />
              Show Password
            </label>
          )}
        </label>

        <div>
          <Button textContent='Sign up!' type='submit' />
        </div>
      </Form>
    </FormContainer>
  );
}

export default withFormik({
  // let matchObj = {};
  mapPropsToValues: ({ match }) => ({
    name: '',
    email: '',
    password: ''
  }),
  handleSubmit: (values, formikBag) => {
    const { resetForm, props } = formikBag;
    const { typeName } = props.match.params;

    if (typeName === 'instructor') {
      // ask for extra info and then submit the data to the database
    } else {
      // Post the data to the database
      let extra = { age: 25, test: 'hello' };
      values = { ...values, ...extra };
      console.log(values);
      // return 'submitted';
    }
    resetForm();
  }
})(SignUpForm);
