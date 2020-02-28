import React from 'react';

import styled from 'styled-components';

const LogoContainer = styled.div`
  position: absolute;
  left: 0%;
  right: 0%;
  top: 0%;
  bottom: 0%;

  h1 {
    font-family: Ubuntu;
    font-style: normal;
    font-weight: bold;
    font-size: 34px;
    line-height: 39px;
    text-align: center;
    letter-spacing: 0.36px;
    color: #fff;

    span {
      color: red;
    }
  }
`;

export default function Logo() {
  return (
    <div>
      <h1>
        Anywhere
        <br />
        <span>Fitness</span>
      </h1>
    </div>
  );
}
