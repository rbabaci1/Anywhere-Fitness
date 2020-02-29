import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Header from '../../../ReusableComponents/Header';
import Client from './Client';
import Instructor from './Instructor';

const MainContent = styled.div`
  display: flex;
  justify-content: space-evenly;

  a {
    text-decoration: none;
  }
`;

export default function AccountType() {
  return (
    <div>
      <Header />

      <MainContent>
        <Link to='/client'>
          <Client />
        </Link>

        <Link to='/instructor'>
          <Instructor />
        </Link>
      </MainContent>
    </div>
  );
}
