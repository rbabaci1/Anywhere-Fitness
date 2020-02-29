import React from 'react';
import styled from 'styled-components';

import Header from './Header';
import ClientType from './ClientType';
import Button from '../../../ReusableComponents/Button';

const ClientSelectDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    width: 341px;
    color: #f7f7f7;
    font-size: 17px;
    line-height: 20px;
    text-align: center;
    letter-spacing: 0.36px;
  }
`;

export default function ClientSelected() {
  return (
    <div>
      <Header />
      <ClientType />

      <ClientSelectDiv>
        <p>
          As a client, you will be able to search and sign up for fitness
          classes based on location, skill level, and preferred work out type.
        </p>

        <Button textContent='Continue' />
      </ClientSelectDiv>
    </div>
  );
}
