import React from 'react';
import styled from 'styled-components';

import Header from './Header';
import ClientType from './ClientType';

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
  button {
    font-family: Ubuntu;
    background: #ca1f3d;
    font-size: 22px;
    color: #f7f7f7;
    border-radius: 100px;
    margin-top: 30px;
    border: none;
    font-weight: bold;
    line-height: 25px;
    padding: 8px 28px;
    cursor: pointer;
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

        <button>Continue</button>
      </ClientSelectDiv>
    </div>
  );
}
