import React from 'react';
import styled from 'styled-components';

import HomePageNav from '../../ReusableComponents/HomePageNav';
import ClassesPage from '../ClassesPage/ClassesPage';

const HomePageContainer = styled.div`
  .empty-nav-bar {
    width: 100%;
    height: 35px;
    background: #ca1f3d;
    @media only screen and (max-width: 500px) {
      display: block;
      position: fixed;
      top: 0;
    }
  }
  .home-page-wrapper {
    display: flex;
    flex-direction: column;
    margin: 0 30px;

    @media only screen and (max-width: 500px) {
      flex-direction: column-reverse;
    }
  }
`;

export default function ClientHomePage() {
  return (
    <HomePageContainer>
      <div className='empty-nav-bar hide'></div>
      <div className='home-page-wrapper'>
        <HomePageNav />

        <ClassesPage />
      </div>
    </HomePageContainer>
  );
}
