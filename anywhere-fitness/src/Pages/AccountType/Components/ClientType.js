import React from 'react';
import styled from 'styled-components';

import clientImage from '../../Images/clientImage.png';

const ClientContainer = styled.div`
  text-align: center;

  h2 {
    font-style: normal;
    font-weight: bold;
    font-size: 22px;
    line-height: 25px;
    text-align: center;
    letter-spacing: 0.36px;
    color: #f7f7f7;
    margin: 0 0 5px 0;
  }
`;

export default function ClientType() {
  return (
    <ClientContainer>
      <h2>Client</h2>
      <img src={clientImage} alt='client athlete'></img>
    </ClientContainer>
  );
}
