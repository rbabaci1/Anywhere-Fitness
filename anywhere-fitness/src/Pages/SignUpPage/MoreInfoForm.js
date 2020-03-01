import React from 'react';
import { Form, withFormik, Field } from 'formik';
import styled from 'styled-components';

import Logo from '../../ReusableComponents/Logo';
import Button from '../../ReusableComponents/Button';
import { FormDefaultStyle } from '../../ReusableComponents/FormDefaultStyle';

const MoreInfoFormContainer = styled(FormDefaultStyle)`
  .select {
    font-size: 20px;
    height: 40px;
    background: inherit;
    border: 2px solid #787777;
    color: #f7f7f7;
  }
`;

function MoreInfoForm() {
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
          <Field as='select' type='text' name='isCertified' className='select'>
            <option disabled>Select one</option>
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </Field>
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
