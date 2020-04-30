import React from 'react';

import Logo from './Logo';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  margin-bottom: 20px;

  section {
    display: flex;
    justify-content: center;

    h3 {
      font-style: normal;
      width: 343px;
      font-weight: 500;
      font-size: 20px;
      line-height: 23px;
      text-align: center;
      letter-spacing: 0.36px;
      margin: 25px 0;
      color: #f7f7f7;
      @media only screen and (min-width: 500px) {
        font-size: 28px;
        width: 100%;
      }
    }
  }
  @media only screen and (min-width: 500px) {
    margin-bottom: 50px;
  }
`;

export default function Header() {
  return (
    <HeaderContainer>
      <Logo />
      <section>
        <h3>Choose if you want to join as a Client or an Instructor</h3>
      </section>
    </HeaderContainer>
  );
}
