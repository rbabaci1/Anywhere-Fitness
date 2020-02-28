import React from 'react';
import styled from 'styled-components';

import Header from './Header';
import ClientType from './ClientType';
import InstructorType from './InstructorType';

const MainContent = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 50px;
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
