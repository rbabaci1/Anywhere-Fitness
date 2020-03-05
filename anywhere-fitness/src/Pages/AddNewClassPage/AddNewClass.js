import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../../ReusableComponents/Button';

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 450px;
  max-width: 450px;

  background: #1e1d20;
  height: 100vh;

  h2 {
    color: #f7f7f7;
    padding: 5px 0;
    margin: 0 0 8px 0;
    background: #414143;
    letter-spacing: 2px;
    font-weight: 200;
    text-align: center;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;

    label {
      display: flex;
      flex-direction: column;
      color: #f7f7f7;
      font-size: 22px;
      margin-bottom: 15px;
      width: 94%;

      input {
        border-radius: 3px;
        box-sizing: border-box;
        border: 1px solid #787777;
        padding: 5px;
        font-size: 21px;
        margin-top: 2px;
        color: blue;
      }
    }
    .button {
      text-align: center;
      button {
        font-size: 24px;
        width: 150px;
        padding: 8px 0;
        margin-top: 10px;
      }
    }
  }
`;

export default function AddNewClass({ addClass }) {
  const [newClass, setNewClass] = useState({
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

    // reset the form
    setNewClass({
      name: '',
      category: '',
      location: '',
      imageUrl: ''
    });
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
