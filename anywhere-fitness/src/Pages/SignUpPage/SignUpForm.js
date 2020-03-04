import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

import Logo from '../../ReusableComponents/Logo';
import Button from '../../ReusableComponents/Button';

import { FormDefaultStyle } from '../../ReusableStyling/FormDefaultStyle';
import { ErrorMessageStyled } from '../../ReusableStyling/ErrorMessageStyled';
import { showPassword } from '../../functionsLibrary/library';

import './checkbox.css';

const SignUpFormContainer = styled(FormDefaultStyle)`
  p {
    font-size: 20px;
  }
  a {
    text-align: center;
  }

  .show-password {
    flex-direction: row;
    margin: 10px 0 0 0;
    font-size: 11px;
    cursor: pointer;
    width: fit-content;
    @media only screen and (min-width: 500px) {
      margin-bottom: 10px;
      #text {
        margin: 5px 0 0 5px;
        font-size: 20px;
      }
    }
  }

  .button {
    margin-top: 100px;
    text-align: center;
    @media only screen and (min-width: 500px) {
      margin: 30px 0;
    }
  }
`;

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
            <ErrorMessageStyled>{errors.name}</ErrorMessageStyled>
          )}
        </label>

        <label>
          Email
          <Field type='email' name='email' placeholder='Enter email' />
          {touched.email && errors.email && (
            <ErrorMessageStyled>{errors.email}</ErrorMessageStyled>
          )}
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
              <span className='checkmark'></span>
              <span id='text'>Show Password</span>
            </label>
          )}
          {touched.password && errors.password && (
            <ErrorMessageStyled>{errors.password}</ErrorMessageStyled>
          )}
        </label>

        {userType === 'instructor' ? (
          <div className='button'>
            <Link
              to={{
                pathname: '/accountType/instructor/signUp/MoreInfo',
                state: {
                  firstFormValues: values
                }
              }}
            >
              <Button
                textContent='Sign up!'
                type='button'
                isSubmitting={false}
              />
            </Link>
          </div>
        ) : (
          <div className='button'>
            <Button
              textContent='Sign up!'
              type='submit'
              isSubmitting={isSubmitting}
            />
          </div>
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

    if (userType === 'client') {
      // Post the data to the database
      console.log(values);
      console.log(props);
      resetForm();
    }
  },
  validationSchema: Yup.object().shape({
    name: Yup.string()
      .required('Please enter your name.')
      .matches(/^[a-zA-Z\s]+$/, 'Must contain alphabet letters only.'),
    email: Yup.string()
      // .notOneOf(['waffle@syrup.com'], 'That email is already taken.')
      .required('Please Enter Your Email.')
      .email("Sorry, that's not a valid email."),
    password: Yup.string()
      .required('Please Enter Your Password.')
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        'Must contain 8 characters, 1 uppercase, 1 lowercase, 1 number and 1 special case character.'
      )
  })
})(SignUpForm);
