import React from 'react';

import styled from 'styled-components';

const LogoContainer = styled.div`
  h1 {
    font-style: normal;
    font-weight: bold;
    font-size: 34px;
    line-height: 39px;
    text-align: center;
    letter-spacing: 0.36px;
    color: #f7f7f7;

    @media only screen and (min-width: 500px) {
      font-size: 45px;
      line-height: 50px;
    }
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
