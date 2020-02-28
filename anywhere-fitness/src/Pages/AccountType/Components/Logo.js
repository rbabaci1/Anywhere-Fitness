import React from 'react';

import styled from 'styled-components';

const LogoContainer = styled.div`
  h1 {
    font-family: Ubuntu;
    font-style: normal;
    font-weight: bold;
    font-size: 34px;
    line-height: 39px;
    text-align: center;
    letter-spacing: 0.36px;
    color: #f7f7f7;

    span {
      color: #ca1f3d;
    }
  }
`;

export default function Logo() {
  return (
    <LogoContainer>
      <h1>
        Anywhere
        <br />
        <span>Fitness</span>
      </h1>
    </LogoContainer>
  );
}
