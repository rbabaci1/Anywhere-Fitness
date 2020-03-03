import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Header from '../../../ReusableComponents/Header';
import Client from '../../../ReusableComponents/Client';
import Instructor from '../../../ReusableComponents/Instructor';

const MainContent = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;

  a {
    text-decoration: none;
  }
  @media only screen and (min-width: 500px) {
    margin-top: 100px;
    padding: 20px 0 30px 0;
    background: #252327;
  }
`;

export default function AccountType() {
  return (
    <div>
      <Header />

      <MainContent>
        <Link to='/accountType/client'>
          <Client />
        </Link>

        <Link to='/accountType/instructor'>
          <Instructor />
        </Link>
      </MainContent>
    </div>
  );
}
