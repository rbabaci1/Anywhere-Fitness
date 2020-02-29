import React from 'react';

import Logo from '../../ReusableComponents/Logo';
import landingPageImage from '../Images/landingPageImage.png';

export default function LandingPage() {
  return (
    <div>
      <Logo />
      <img src={landingPageImage} alt='Athletes working out.' />
    </div>
  );
}
