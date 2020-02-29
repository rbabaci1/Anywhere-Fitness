import React from 'react';
import styled from 'styled-components';
import { Link, Route } from 'react-router-dom';

import Header from './Header';
import ClientType from './ClientType';
import InstructorType from './InstructorType';

const MainContent = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 40px;
`;

export default function AccountTypeHome() {
  return (
    <div>
      <Header />

      <MainContent>
        <Link to='/clientSelect'>
          <ClientType />
        </Link>

        <InstructorType />
      </MainContent>
    </div>
  );
}
