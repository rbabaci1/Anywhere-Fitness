import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import Button from '../../ReusableComponents/Button';

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: start;
  background: #1a1c1f;
  padding: 25px 5px;
  border-radius: 10px;
  @media only screen and (max-width: 500px) {
    padding: 10px 0;
  }

  h2 {
    color: #f7f7f7;
    padding: 5px 0;
    margin: 0 0 8px 0;
    background: #262930;
    letter-spacing: 2px;
    font-weight: 200;
    text-align: center;
    @media only screen and (max-width: 500px) {
      font-size: 22px;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;

    label {
      display: flex;
      flex-direction: column;
      color: #f7f7f7;
      font-size: 20px;
      margin-bottom: 15px;
      width: 94%;
      @media only screen and (max-width: 500px) {
        font-size: 16px;
        margin-bottom: 5px;
      }

      input {
        border-radius: 3px;
        box-sizing: border-box;
        border: 1px solid #787777;
        padding: 5px;
        font-size: 21px;
        margin-top: 2px;
        color: blue;
        @media only screen and (max-width: 500px) {
          font-size: 16px;
        }
      }
    }
    .button {
      text-align: center;
      button {
        font-size: 22px;
        width: 150px;
        padding: 10px 0;
        margin-top: 10px;
        @media only screen and (max-width: 500px) {
          font-size: 18px;
          width: 130px;
          padding: 7px 0;
        }
      }
    }
  }
`;

export default function AddNewClass({ addClass, history }) {
  const [newClass, setNewClass] = useState({
    id: 0,
    name: '',
    category: '',
    location: '',
    imageUrl: ''
  });

  const changeHandler = event => {
    const { value, name } = event.target;

    setNewClass({ ...newClass, [name]: value });
  };
  const submitHandler = event => {
    event.preventDefault();
    addClass(newClass);
    // Post the Class to the database
    axios
      .post(
        'https://anywhere-fitness1.herokuapp.com/api/users/:id/post',
        newClass
      )
      .catch(error => console.error(error));

    // reset the form
    setNewClass({
      id: 0,
      name: '',
      category: '',
      location: '',
      imageUrl: ''
    });
    history.push('/InstructorHome');
  };

  return (
    <FormContainer className='new-class-form'>
      <h2>Add a new Class</h2>

      <form onSubmit={submitHandler}>
        <label>
          Class Name
          <input
            type='text'
            name='name'
            value={newClass.name}
            onChange={changeHandler}
          />
        </label>

        <label>
          Category
          <input
            type='text'
            name='category'
            value={newClass.category}
            onChange={changeHandler}
          />
        </label>

        <label>
          Location
          <input
            type='text'
            name='location'
            value={newClass.location}
            onChange={changeHandler}
          />
        </label>

        <label>
          Image URL Address
          <input
            type='text'
            name='imageUrl'
            value={newClass.imageUrl}
            onChange={changeHandler}
          />
        </label>

        <div className='button'>
          <Button textContent='Add Class' type='submit' />
        </div>
      </form>
    </FormContainer>
  );
}
