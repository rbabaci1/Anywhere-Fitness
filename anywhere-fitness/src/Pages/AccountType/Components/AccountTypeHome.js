import React from 'react';

import Header from './Header';
import clientImage from '../../Images/clientImage.png';
import instructorImage from '../../Images/instructorImage.png';

export default function AccountTypeHome() {
  return (
    <div>
      <Header />

      <div>
        <div>
          <h2>Client</h2>
          <img src={clientImage} alt=''></img>
        </div>

        <div>
          <h2>Instructor</h2>
          <img src={instructorImage} alt=''></img>
        </div>
      </div>
    </div>
  );
}
