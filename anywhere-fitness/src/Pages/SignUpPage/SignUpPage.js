import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Form, Field, withFormik } from 'formik';
import * as yup from 'yup';
import axios from 'axios';

import Button from '../../ReusableComponents/Button';

function SignUpPage({ match }) {
  const { typeName } = match.params;

  return (
    <div className='form-container'>
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

        <div></div>
      </Form>
    </div>
  );
}

export default withFormik({
  mapPropsToValues: ({ match }) => ({
    name: match.params.typeName,
    email: '',
    password: ''
  })
})(SignUpPage);
