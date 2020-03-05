import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import HomePageNav from '../../ReusableComponents/HomePageNav';
import ClientClassCard from '../../ReusableComponents/ClientClassCard';
import axios from 'axios';

const HomePageContainer = styled.div`
  .empty-nav-bar {
    width: 100%;
    height: 40px;
    background: #ca1f3d;
    @media only screen and (max-width: 500px) {
      display: block;
      position: fixed;
      top: 0;
    }
  }
  .home-page-wrapper {
    display: flex;
    flex-direction: column;
    margin: 0 30px;

    @media only screen and (max-width: 500px) {
      flex-direction: column-reverse;
    }
  }
  .classes-wrapper {
    margin-top: 80px;

    section {
      .title {
        margin: 0 0 24px 120px;
        color: #f7f7f7;
        font-size: 54px;
        @media only screen and (max-width: 500px) {
          font-size: 30px;
          margin: 0 0 20px 0;
        }
      }

      .classes {
        display: flex;
        flex-wrap: wrap;
        @media only screen and (max-width: 500px) {
          flex-wrap: nowrap;
          overflow: auto;
        }
        a {
          text-decoration: none;
        }
      }
    }
  }
`;

export default function ClientHomePage() {
  const [classes, setClasses] = useState([
    {
      id: 0,
      name: 'Yoga',
      location: 'Cincy Yoga Club',
      teacher: 'Cincinnati',
      rating: '4.5'
    }
  ]);

  useEffect(() => {
    axios
      .get('https://anywhere-fitness1.herokuapp.com/api/classes')
      .then(response => {
        console.log(response);
        // setClasses with the received data
        setClasses(response.data);
      })
      .catch(error => console.error(error));
  }, []);

  return (
    <HomePageContainer>
      <div className='empty-nav-bar hide'></div>
      <div className='home-page-wrapper'>
        <HomePageNav />

        <div className='classes-wrapper'>
          <section className='nearby-popular'>
            <h1 className='title'>Nearby Popular</h1>

            <div className='classes'>
              {classes.map(classInfo => (
                <Link to='/ClientHome/class'>
                  <ClientClassCard classInfo={classInfo} key={classInfo.id} />
                </Link>
              ))}
            </div>
          </section>
        </div>
      </div>
    </HomePageContainer>
  );
}
