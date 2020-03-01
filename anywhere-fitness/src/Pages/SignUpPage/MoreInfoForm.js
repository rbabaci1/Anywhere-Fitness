import React from 'react';
import { Form, withFormik, Field } from 'formik';
import styled from 'styled-components';

import Logo from '../../ReusableComponents/Logo';
import Button from '../../ReusableComponents/Button';
import { FormContainer } from '../../ReusableComponents/Styled-components';

function MoreInfoForm() {
  return (
    <FormContainer>
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
          <Field as='select' type='text' name='isCertified' className='select'>
            <option disabled>Select one</option>
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </Field>
        </label>

        <Button textContent='Continue' type='submit' />
      </Form>
    </FormContainer>
  );
}

export default withFormik({
  mapPropsToValues: () => ({
    specialty: '',
    yearsOfExperience: 0,
    isCertified: true
  }),
  handleSubmit: (values, formikBag) => {
    const { props, resetForm } = formikBag;
    const { firstFormValues } = props.location.state;
    // concat the first form values with the current
    values = { ...firstFormValues, ...values };
    console.log(values);
    // console.log(formikBag);
    resetForm();
  }
})(MoreInfoForm);
