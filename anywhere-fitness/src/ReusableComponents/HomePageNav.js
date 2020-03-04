import React from 'react';
import styled from 'styled-components';

import accountIcon from '../Pages/Images/accountIcon.png';
import searchIcon from '../Pages/Images/searchIcon.png';
import calendarIcon from '../Pages/Images/calendarIcon.png';
import settingIcon from '../Pages/Images/settingIcon.png';

import Logo from './Logo';

export default function HomePageNav() {
  return (
    <div>
      <Logo />

      <section>
        <img src={accountIcon} />
        <img src={searchIcon} />
        <img src={calendarIcon} />
        <img src={settingIcon} />
      </section>
    </div>
  );
}
