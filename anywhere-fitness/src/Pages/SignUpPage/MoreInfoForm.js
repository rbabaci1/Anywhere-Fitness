import React from 'react';
import { Form, withFormik, Field } from 'formik';
import styled from 'styled-components';

import Logo from '../../ReusableComponents/Logo';
import Button from '../../ReusableComponents/Button';

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    width: 344px;
    font-size: 22px;
    line-height: 25px;
    text-align: center;
    letter-spacing: 0.36px;
    color: #f7f7f7;
  }

  form {
    display: flex;
    flex-direction: column;
    width: 330px;
    margin-top: 30px;

    label {
      display: flex;
      flex-direction: column;
      color: #f7f7f7;
      font-size: 17px;
      font-weight: normal;
      line-height: 20px;
      letter-spacing: 0.36px;
      margin-bottom: 13px;

      input {
        border-radius: 3px;
        box-sizing: border-box;
        border: 2px solid #787777;
        padding: 10px 6px;
        font-size: 17px;
        background: inherit;
        color: #f7f7f7;
        font-family: Ubuntu;
      }

      .select {
        font-size: 20px;
        height: 40px;
        background: inherit;
        border: 2px solid #787777;
        color: #f7f7f7;
      }
    }
    button {
      align-self: center;
      margin-top: 100px;
    }
  }
`;

function MoreInfoForm(props) {
  console.log(props.location);
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
  })
})(MoreInfoForm);
