import React, { useState, useEffect } from 'react';
import { Link, Route } from 'react-router-dom';
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
    display: inline-block;
    margin-bottom: 20px;
    cursor: pointer;

    .classes-icon {
      height: 35px;
      width: 30px;
      margin-top: 20px;
      margin-left: 15px;
    }

    span {
      color: #f7f7f7;
      margin: 5px 0;
      font-size: 20px;
    }
    &:hover {
      span {
        color: #ca1f3d;
      }
    }
  }

  .new-classes-main {
    display: flex;
    justify-content: space-between;
  }

  .active-classes {
    width: 80%;

    h1 {
      margin: 0 0 20px 20px;
      color: #f7f7f7;
      font-size: 48px;
      border-bottom: 2px solid;
    }
    .classes {
      display: flex;
      flex-wrap: wrap;
    }
  }
  .create-classes {
    width: 18%;
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

        <div className='new-classes-main'>
          <div className='active-classes'>
            <h1>Active Classes</h1>

            <div className='classes'>
              {classes.map(classInfo => (
                <InstructorClassCard classInfo={classInfo} />
              ))}
            </div>
          </div>

          <div className='create-classes'>
            <Link to='/InstructorHome/addNewClass'>
              <span>Create New Class</span>
              <img src={classesIcon} className='classes-icon' />
            </Link>

            <Route
              path='/InstructorHome/addNewClass'
              render={props => <AddNewClass {...props} addClass={addClass} />}
            />
          </div>
        </div>
      </div>
    </InstructorPageContainer>
  );
}
