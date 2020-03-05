import React, { useState, useEffect } from 'react';
import { NavLink, Route } from 'react-router-dom';
import styled from 'styled-components';

import HomePageNav from '../../ReusableComponents/HomePageNav';
import InstructorClassCard from '../../ReusableComponents/InstructorClassCard';
import AddNewClass from '../AddNewClassPage/AddNewClass';

import classesIcon from '../Images/classes.png';

const classData = {
  name: 'Karate',
  location: "Taryn's Dojo"
};

const InstructorPageContainer = styled.div`
  margin: 0 30px;

  a {
    text-decoration: none;
  }
  .icon-wrapper {
    padding: 2px 7px;
    width: fit-content;

    .classes-icon {
      height: 35px;
      width: 30px;
      margin-top: 20px;
      margin-left: 15px;
    }
    p {
      color: #f7f7f7;
      margin: 5px 0;
      font-size: 20px;
    }
  }
  .new-classes-main {
    display: flex;
  }
  .icon-wrapper:hover {
    cursor: pointer;
    p {
      color: #ca1f3d;
    }
  }

  .active-classes {
    width: 90%;

    h1 {
      margin: 0 0 20px 20px;
      color: #f7f7f7;
      font-size: 50px;
      border-bottom: 2px solid;
    }
    .classes {
      display: flex;
      flex-wrap: wrap;
    }
  }
`;

export default function InstructorHomePage() {
  const [classes, setClasses] = useState([]);

  const addClass = newClass => setClasses([...classes, newClass]);

  return (
    <InstructorPageContainer>
      <div className='empty-nav-bar hide'></div>

      <div className='home-page-wrapper'>
        <HomePageNav />

        <NavLink to='/instructor/addNewClass'>
          <div className='icon-wrapper'>
            <img src={classesIcon} className='classes-icon' />
            <p>Create New Class</p>
          </div>
        </NavLink>

        <div className='new-classes-main'>
          <Route
            path='/instructor/addNewClass'
            render={props => <AddNewClass {...props} addClass={addClass} />}
          />

          <div className='active-classes'>
            <h1>Active Classes</h1>

            <div className='classes'>
              {classes.map(classInfo => (
                <InstructorClassCard classInfo={classInfo} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </InstructorPageContainer>
  );
}
