import React from 'react';
import styled from 'styled-components';

import HomePageNav from '../../ReusableComponents/HomePageNav';

const InstructorPageContainer = styled.div`
  margin: 0 30px;
`;

export default function InstructorHomePage() {
  return (
    <InstructorPageContainer>
      <div className='empty-nav-bar hide'></div>

      <div className='home-page-wrapper'>
        <HomePageNav />
      </div>
    </InstructorPageContainer>
  );
}
