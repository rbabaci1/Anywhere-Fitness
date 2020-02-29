import React from 'react';
import styled from 'styled-components';
import { Link, Route } from 'react-router-dom';

import Header from './Header';
import ClientType from './ClientType';
import InstructorType from './InstructorType';
import ClientSelected from './ClientSelected';

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
        <ClientType />
        <InstructorType />
      </MainContent>
    </div>
  );
}
