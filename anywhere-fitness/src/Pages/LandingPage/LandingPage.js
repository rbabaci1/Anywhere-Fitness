import React from 'react';
import styled from 'styled-components';

import Logo from '../../ReusableComponents/Logo';
import landingPageImage from '../Images/landingPageImage.png';

const LandingPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 100%;
  }
  h4 {
    width: 343px;
    font-size: 17px;
    font-weight: 500;
    color: #f7f7f7;
    line-height: 20px;
    letter-spacing: 0.36px;
    text-align: center;
  }
`;

export default function LandingPage() {
  return (
    <LandingPageContainer>
      <Logo />

      <img src={landingPageImage} alt='Athletes working out.' />

      <h4>Attend classes that are run by local instructors, anywhere!</h4>
    </LandingPageContainer>
  );
}
