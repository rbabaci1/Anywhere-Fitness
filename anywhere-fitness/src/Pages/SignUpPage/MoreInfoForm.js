import React from 'react';
import { Form, withFormik, Field } from 'formik';
import * as yup from 'yup';
import styled from 'styled-components';

import Logo from '../../ReusableComponents/Logo';
import Button from '../../ReusableComponents/Button';
import { FormDefaultStyle } from '../../ReusableComponents/FormDefaultStyle';
import { toggleActive, removeActive } from '../../functionsLibrary/library';

const MoreInfoFormContainer = styled(FormDefaultStyle)`
  .select {
    span {
      display: inline-block;
      padding: 8px 3px;
      width: 30px;
      text-align: center;
      margin: 2px 8px 0 0;
      border: 1px solid gray;
      border-radius: 3px;
      cursor: pointer;
    }
    .active {
      color: #000000;
      background: #f7f7f7;
    }
  }
`;

function MoreInfoForm({ setValues, values }) {
  return (
    <MoreInfoFormContainer>
      <Logo />
      <p>Tell us more about you!</p>

      <Form>
        <label>
          Exercise you specialize in
          <Field
            type='text'
            name='specialty'
            placeholder='Exercise you specialize in'
          />
        </label>

        <label>
          Years of Experience
          <Field type='number' name='yearsOfExperience' id='years' />
        </label>

        <label>
          Are You a Certified?
          <div
            className='select'
            onClick={event => toggleActive(event, setValues, values)}
          >
            <span id='yes'>Yes</span>
            <span id='no'>No</span>
          </div>
        </label>

        <Button textContent='Continue' type='submit' />
      </Form>
    </MoreInfoFormContainer>
  );
}

export default withFormik({
  mapPropsToValues: () => ({
    specialty: '',
    yearsOfExperience: 0,
    isCertified: false
  }),
  handleSubmit: (values, formikBag) => {
    const { props, resetForm } = formikBag;
    const { firstFormValues } = props.location.state;
    // concat the first form values with the current
    values = { ...firstFormValues, ...values };

    console.log(values);
    // console.log(formikBag);
    removeActive();
    resetForm();
  }
})(MoreInfoForm);
