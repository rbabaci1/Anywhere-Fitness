import React, { useState } from 'react';
import { Link, Route } from 'react-router-dom';
import styled from 'styled-components';

import HomePageNav from '../../ReusableComponents/HomePageNav';
import InstructorClassCard from '../../ReusableComponents/InstructorClassCard';
import AddNewClass from '../AddNewClassPage/AddNewClass';
import AbsoluteWrapper from '../../ReusableComponents/AbsoluteWrapper';

import classesIcon from '../../Images/classes.png';

const InstructorPageContainer = styled.div`
  margin: 0 30px;

  .empty-nav-bar {
    width: 100%;
    height: 45px;
    background: #ca1f3d;
    @media only screen and (max-width: 500px) {
      display: block;
      position: fixed;
      top: 0;
      left: 0;
    }
  }
  .home-page-wrapper {
    @media only screen and (max-width: 500px) {
      margin-top: 60px;
    }
  }

  .add-class-link {
    box-sizing: border-box;
    text-decoration: none;
    display: inline-block;
    margin-bottom: 10px;
    cursor: pointer;
    border-bottom: 2px solid #fa2742;
    width: 210px;
    padding: 11px 0;
    @media only screen and (max-width: 500px) {
      padding: 0px 0 5px 0;
    }

    .classes-icon {
      height: 35px;
      width: 30px;
      margin-left: 15px;
      @media only screen and (max-width: 500px) {
        float: right;
        height: 30px;
        width: 25px;
      }
    }

    span {
      color: #f7f7f7;
      font-size: 20px;
    }
    &:hover {
      span {
        transition: 2s;
        color: #fa2742;
      }
    }
  }

  .new-classes-main {
    display: flex;
    justify-content: space-between;

    @media only screen and (max-width: 500px) {
      flex-direction: column-reverse;
    }
  }

  .active-classes {
    width: 70%;

    h1 {
      margin: 0 0 20px 20px;
      color: #f7f7f7;
      font-size: 48px;
      border-bottom: 2px solid;
    }
    .classes {
      display: flex;
      flex-wrap: wrap;
      @media only screen and (max-width: 500px) {
        justify-content: space-between;
      }
    }

    @media only screen and (max-width: 500px) {
      width: 100%;

      h1 {
        margin: 5px 0 5px 0;
        font-size: 24px;
        width: fit-content;
      }
    }
  }
  .create-classes {
    text-align: end;
    width: 28%;
    @media only screen and (max-width: 500px) {
      width: 100%;
      text-align: start;
    }
  }
`;

export default function InstructorHomePage() {
  const [classes, setClasses] = useState([]);

  const addClass = newClass => setClasses([...classes, newClass]);

  return (
    <AbsoluteWrapper>
      <InstructorPageContainer>
        <div className='empty-nav-bar hide'></div>

        <div className='home-page-wrapper'>
          <HomePageNav />

          <div className='new-classes-main'>
            <div className='active-classes'>
              <h1>Active Classes</h1>

              <div className='classes'>
                {classes.map(classInfo => (
                  <InstructorClassCard
                    classInfo={classInfo}
                    key={classInfo.id}
                  />
                ))}
              </div>
            </div>

            <div className='create-classes'>
              <Link to='/InstructorHome/addNewClass' className='add-class-link'>
                <span>Create New Class</span>
                <img
                  src={classesIcon}
                  className='classes-icon'
                  alt='create new class icon'
                />
              </Link>

              <Route
                path='/InstructorHome/addNewClass'
                render={props => <AddNewClass {...props} addClass={addClass} />}
              />
            </div>
          </div>
        </div>
      </InstructorPageContainer>
    </AbsoluteWrapper>
  );
}
