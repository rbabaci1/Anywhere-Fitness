import React from 'react';
import styled from 'styled-components';
import { Link, Route } from 'react-router-dom';

import Header from '../../../ReusableComponents/Header';
import ClientType from './ClientType';
import InstructorType from './InstructorType';

const MainContent = styled.div`
  display: flex;
  justify-content: space-evenly;

  a {
    text-decoration: none;
  }
`;

export default function AccountTypeHome() {
  return (
    <div>
      <Header />

      <MainContent>
        <Link to='/clientSelect'>
          <ClientType />
        </Link>

        <Link to='/instructorSelect'>
          <InstructorType />
        </Link>
      </MainContent>
    </div>
  );
}
