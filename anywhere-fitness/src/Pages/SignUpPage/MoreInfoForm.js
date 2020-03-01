import React from 'react';
import { Form, withFormik, Field } from 'formik';
import styled from 'styled-components';

import Logo from '../../ReusableComponents/Logo';

function MoreInfoForm() {
  return (
    <div>
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
      </Form>
    </div>
  );
}

export default withFormik({
  mapPropsToValues: () => ({
    specialty: '',
    yearsOfExperience: 0,
    isCertified: true
  })
})(MoreInfoForm);
