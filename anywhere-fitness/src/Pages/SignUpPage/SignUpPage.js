import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Form, Field, withFormik } from 'formik';
import * as yup from 'yup';
import axios from 'axios';

function SignUpPage({ match }) {
  const { typeName } = match.params;

  return (
    <div>
      <h1>Sign Up Page</h1>
    </div>
  );
}

export default withFormik({
  mapPropsToValues: () => ({
    name: '',
    email: '',
    password: ''
  })
})(SignUpPage);
