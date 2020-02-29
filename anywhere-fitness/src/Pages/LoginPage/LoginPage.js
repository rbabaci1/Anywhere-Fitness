import React from 'react';
import styled from 'styled-components';

import Logo from '../../ReusableComponents/Logo';
import Button from '../../ReusableComponents/Button';

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    width: 344px;
    font-size: 20px;
    line-height: 23px;
    text-align: center;
    letter-spacing: 0.36px;
    color: #f7f7f7;
  }
`;

export default function LoginPage() {
  return (
    <LoginContainer>
      <Logo />

      <p>Log in by providing the information below</p>
    </LoginContainer>
  );
}
