import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Form, Field, withFormik } from 'formik';
import * as yup from 'yup';
import axios from 'axios';

function SignUpPage({ match }) {
  const { typeName } = match.params;

  return (
    <div className='form-container'>
      <Form>
        <label>
          Name
          <Field type='text' name='name' placeholder='Enter name' />
        </label>
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
