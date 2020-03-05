import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import accountIcon from '../Pages/Images/accountIcon.png';
import searchIcon from '../Pages/Images/searchIcon.png';
import calendarIcon from '../Pages/Images/calendarIcon.png';
import settingIcon from '../Pages/Images/settingIcon.png';

import Logo from './Logo';

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    font-size: 32px;
    line-height: 35px;
    @media only screen and (max-width: 700px) {
      font-size: 26px;
      line-height: 30px;
    }
    @media only screen and (max-width: 500px) {
      display: none;
    }
  }
  .icons {
    width: 200px;
    display: flex;
    justify-content: space-between;

    img {
      width: 30px;
      height: 30px;

      @media only screen and (max-width: 700px) {
        width: 24px;
        height: 24px;
      }
    }
    @media only screen and (max-width: 500px) {
      width: 100%;
      justify-content: space-around;
      padding: 30px 0;
      background: #29272c;
      position: fixed;
      bottom: 0;
      left: 0;
    }
  }
`;

export default function HomePageNav() {
  return (
    <NavContainer>
      <Logo />

      <section className='icons'>
        <NavLink to='/'>
          <img src={accountIcon} alt='account icon' />
        </NavLink>

        <NavLink to='/'>
          <img src={searchIcon} alt='search icon' />
        </NavLink>

        <NavLink to='/'>
          <img src={calendarIcon} alt='calendar icon' />
        </NavLink>

        <NavLink to='/'>
          <img src={settingIcon} alt='setting icon' />
        </NavLink>
      </section>
    </NavContainer>
  );
}
