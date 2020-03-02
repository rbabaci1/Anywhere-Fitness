import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Form, Field, withFormik } from 'formik';
import * as yup from 'yup';
import axios from 'axios';

import Logo from '../../ReusableComponents/Logo';
import Button from '../../ReusableComponents/Button';
import { FormDefaultStyle } from '../../ReusableComponents/FormDefaultStyle';

import { showPassword } from '../../functionsLibrary/library';

const SignUpFormContainer = styled(FormDefaultStyle)`
  p {
    font-size: 20px;
  }
  .show-password {
    flex-direction: row;
    margin: 10px 0 0 0;
    font-size: 11px;
  }
  a {
    text-align: center;
  }
`;
const errorMessageStyle = {
  color: '#da4010',
  marginTop: '2px',
  textAlign: 'center',
  fontSize: '18px'
};

function SignUpForm({ values, match, touched, errors, isSubmitting }) {
  const { userType } = match.params;

  return (
    <SignUpFormContainer>
      <Logo />

      <p>Create an account by providing the information below</p>

      <Form>
        <label>
          Name
          <Field type='text' name='name' placeholder='Enter name' />
          {touched.name && errors.name && (
            <span style={errorMessageStyle}>{errors.name}</span>
          )}
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
    </SignUpFormContainer>
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
  },
  validationSchema: yup.object().shape({
    name: yup
      .string()
      .required('Please enter your name.')
      .matches(/^[a-zA-Z]+$/, 'Must contain alphabet letters only.')
  })
})(SignUpForm);
