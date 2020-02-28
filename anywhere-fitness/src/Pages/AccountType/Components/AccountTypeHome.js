import React from 'react';
import styled from 'styled-components';

import Header from './Header';
import clientImage from '../../Images/clientImage.png';
import instructorImage from '../../Images/instructorImage.png';

const MainContent = styled.div`
  display: flex;
`;

export default function AccountTypeHome() {
  return (
    <div>
      <Header />

      <div>
        <div>
          <h2>Client</h2>
          <img src={clientImage} alt='client athlete'></img>
        </div>

        <div>
          <h2>Instructor</h2>
          <img src={instructorImage} alt='instructor athlete'></img>
        </div>
      </div>
    </div>
  );
}
