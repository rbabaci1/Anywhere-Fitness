import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import HomePageNav from '../../ReusableComponents/HomePageNav';
import InstructorClassCard from '../../ReusableComponents/InstructorClassCard';
import classesIcon from '../Images/classes.png';

const classData = {
  name: 'Karate',
  location: "Taryn's Dojo"
};

const InstructorPageContainer = styled.div`
  margin: 0 30px;

  .icon-wrapper {
    padding: 5px 10px;
    width: fit-content;

    .classes-icon {
      height: 35px;
      width: 30px;
      margin-top: 20px;
      margin-left: 15px;
    }
    p {
      color: #f7f7f7;
      margin: 10px 0;
      font-size: 20px;
    }
  }
  .icon-wrapper:hover {
    background: #211f22;
    cursor: pointer;
    p {
      color: #ca1f3d;
    }
  }

  .active-classes {
    margin-top: 30px;

    h1 {
      margin: 0 0 24px 120px;
      color: #f7f7f7;
      font-size: 54px;
    }
    .classes {
      display: flex;
      flex-wrap: wrap;
    }
  }
`;

export default function InstructorHomePage() {
  return (
    <InstructorPageContainer>
      <div className='empty-nav-bar hide'></div>

      <div className='home-page-wrapper'>
        <HomePageNav />

        <div className='icon-wrapper'>
          <img src={classesIcon} className='classes-icon' />
          <p>Classes</p>
        </div>

        <div className='active-classes'>
          <h1>Active Classes</h1>
          <div className='classes'>
            <InstructorClassCard classInfo={classData} />
          </div>
        </div>
      </div>
    </InstructorPageContainer>
  );
}
