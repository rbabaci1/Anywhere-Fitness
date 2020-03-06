import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Header from './Header';
import Client from '../ReusableComponents/Client';
import Instructor from '../ReusableComponents/Instructor';
import Button from '../ReusableComponents/Button';

const SelectedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;

  .user {
    text-align: center;
    @media only screen and (min-width: 500px) {
      display: flex;
      width: 100%;
      justify-content: space-evenly;
      flex-wrap: wrap;
      background: #252327;
    }

    p {
      width: 341px;
      color: #f7f7f7;
      font-size: 17px;
      line-height: 20px;
      text-align: center;
      letter-spacing: 0.36px;

      @media only screen and (min-width: 500px) {
        width: 500px;
        font-size: 24px;
        line-height: 35px;
        margin-top: 30px;
      }
    }
    .button {
      margin: 50px 0 30px 0;
    }
  }
`;

export default function ClientOrInstructor({ userType }) {
  return (
    <SelectedContainer>
      <Header />

      {userType === 'client' ? (
        <div className='user' style={{ flexDirection: 'row-reverse' }}>
          <Client />
          <div>
            <p>
              As a client, you will be able to search and sign up for fitness
              classes based on location, skill level, and preferred work out
              type.
            </p>

            <section className='button'>
              <Link to='/accountType/client/signUp'>
                <Button textContent='Continue' />
              </Link>
            </section>
          </div>
        </div>
      ) : (
        <div className='user'>
          <Instructor />
          <div>
            <p>
              As an instructor you will be able to manage and post the location
              of your fitness classes for others to join, manage clients
              attendance, and receive payment for classes.
            </p>

            <section className='button'>
              <Link to='/accountType/instructor/signUp'>
                <Button textContent='Continue' />
              </Link>
            </section>
          </div>
        </div>
      )}
    </SelectedContainer>
  );
}
