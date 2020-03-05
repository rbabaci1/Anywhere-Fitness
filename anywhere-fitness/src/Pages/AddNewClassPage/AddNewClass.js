import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../../ReusableComponents/Button';

export default function AddNewClass() {
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

  return (
    <div>
      <h2>Add a new Class</h2>

      <form>
        <label>
          <input type='text' name='' onChange={changeHandler} />
        </label>

        <label>
          <input type='text' name='' onChange={changeHandler} />
        </label>

        <label>
          <input type='text' name='' onChange={changeHandler} />
        </label>

        <label>
          <input type='text' name='' onChange={changeHandler} />
        </label>
      </form>
    </div>
  );
}
