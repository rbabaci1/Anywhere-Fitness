import React from 'react';
import styled from 'styled-components';

import HomePageNav from '../../ReusableComponents/HomePageNav';
import ClassesPage from '../ClassesPage/ClassesPage';

const HomePageContainer = styled.div`
  margin: 0 30px;
`;

export default function ClientHomePage() {
  return (
    <HomePageContainer>
      <HomePageNav />

      <ClassesPage />
    </HomePageContainer>
  );
}
