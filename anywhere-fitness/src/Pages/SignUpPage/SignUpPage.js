import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Form, Field, withFormik } from 'formik';
import * as yup from 'yup';
import axios from 'axios';

import Logo from '../../ReusableComponents/Logo';
import Button from '../../ReusableComponents/Button';

const formContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function SignUpPage({ match }) {
  const { typeName } = match.params;

  return (
    <formContainer>
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
          <Field type='password' name='password' placeholder='Enter password' />
        </label>

        <div>
          <Button textContent='Sign up!' />
        </div>
      </Form>
    </formContainer>
  );
}

export default withFormik({
  mapPropsToValues: ({ match }) => ({
    name: match.params.typeName,
    email: '',
    password: ''
  })
})(SignUpPage);
