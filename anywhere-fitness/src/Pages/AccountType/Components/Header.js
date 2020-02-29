import React from 'react';

import Logo from '../../../ReusableComponents/Logo';
import styled from 'styled-components';

const Description = styled.div`
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
`;

export default function Header() {
  return (
    <div>
      <Logo />
      <Description>
        <h3>Choose if you want to join as a Client or an Instructor</h3>
      </Description>
    </div>
  );
}
