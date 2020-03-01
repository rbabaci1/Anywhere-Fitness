import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Header from './Header';
import Client from '../Pages/AccountType/Components/Client';
import Instructor from '../Pages/AccountType/Components/Instructor';
import Button from '../ReusableComponents/Button';

const SelectedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  div {
    text-align: center;

    p {
      width: 341px;
      color: #f7f7f7;
      font-size: 17px;
      line-height: 20px;
      text-align: center;
      letter-spacing: 0.36px;
    }
  }
`;

export default function ClientOrInstructor({ type }) {
  return (
    <SelectedContainer>
      <Header />

      {type === 'client' ? (
        <div>
          <Client />
          <p>
            As a client, you will be able to search and sign up for fitness
            classes based on location, skill level, and preferred work out type.
          </p>

          <Link to='/client/signUp'>
            <Button textContent='Continue' />
          </Link>
        </div>
      ) : (
        <div>
          <Instructor />
          <p>
            As an instructor you will be able to manage and post the location of
            your fitness classes for others to join, manage clients attendance,
            and receive payment for classes.
          </p>

          <Link to='/instructor/signUp'>
            <Button textContent='Continue' />
          </Link>
        </div>
      )}
    </SelectedContainer>
  );
}
