import React from 'react';
import styled from 'styled-components';

import clientImage from '../Pages/Images/clientImage.png';

const ClientContainer = styled.div`
  text-align: center;
  margin: 10px;

  h2 {
    font-style: normal;
    font-weight: bold;
    font-size: 22px;
    line-height: 25px;
    text-align: center;
    letter-spacing: 0.36px;
    color: #f7f7f7;
    margin: 0 0 5px 0;

    @media only screen and (min-width: 500px) {
      font-size: 26px;
    }
  }

  img {
    @media only screen and (min-width: 500px) {
      width: 300px;
    }
  }
`;

export default function Client() {
  return (
    <ClientContainer>
      <h2>Client</h2>
      <img src={clientImage} alt='client athlete'></img>
    </ClientContainer>
  );
}
