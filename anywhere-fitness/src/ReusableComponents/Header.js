import React from 'react';

import Logo from './Logo';
import styled from 'styled-components';

const HeaderComponent = styled.div`
  margin-bottom: 50px;

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
      color: #f7f7f7;
    }
  }
`;

export default function Header() {
  return (
    <HeaderComponent>
      <Logo />
      <section>
        <h3>Choose if you want to join as a Client or an Instructor</h3>
      </section>
    </HeaderComponent>
  );
}
