import React from 'react';
import styled from 'styled-components';

import Header from './Header';
import clientImage from '../../Images/clientImage.png';
import instructorImage from '../../Images/instructorImage.png';

const MainContent = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 50px;

  div {
    h2 {
      font-style: normal;
      font-weight: bold;
      font-size: 22px;
      line-height: 25px;
      text-align: center;
      letter-spacing: 0.36px;
      color: #f7f7f7;
      margin-bottom: 5px;
    }
  }
`;

export default function AccountTypeHome() {
  return (
    <div>
      <Header />

      <MainContent>
        <div>
          <h2>Client</h2>
          <img src={clientImage} alt='client athlete'></img>
        </div>

        <div>
          <h2 style={{ color: '#CA1F3D' }}>Instructor</h2>
          <img src={instructorImage} alt='instructor athlete'></img>
        </div>
      </MainContent>
    </div>
  );
}
