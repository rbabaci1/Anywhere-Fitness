import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Logo from '../../ReusableComponents/Logo';
import Button from '../../ReusableComponents/Button';

import landingPageImage from '../Images/landingPageImage.png';
import landingPageImage2 from '../Images/landingPageImage2.png';
import landingPageImage3 from '../Images/landingPageImage3.png';

const LandingPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h4 {
    width: 343px;
    font-size: 17px;
    font-weight: 500;
    color: #f7f7f7;
    line-height: 20px;
    letter-spacing: 0.36px;
    text-align: center;
  }
  p {
    font-size: 11px;
    line-height: 13px;
    width: 174px;
    color: #f7f7f7;
    margin-top: 70px;
    text-align: center;
    letter-spacing: 0.36px;

    a {
      color: #ca1f3d;
      text-decoration: none;
    }
  }
  .button {
    margin-top: 100px;
    text-align: center;
  }

  @media only screen and (min-width: 700px) {
    .landing-image {
      width: 100%;
      align-self: flex-end;
      display: block;
      margin-top: 20px;
    }
    .image1 {
      margin: 0;
    }

    .header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;

      .sign-in {
        margin-top: 0;
        display: block;
        font-size: 20px;
        width: 306px;
        padding-right: 15px;
      }
      h1 {
        font-size: 22px;
        line-height: 25px;
        padding-left: 15px;
      }
    }
    .mobile-login {
      display: none;
    }

    .main-content {
      display: flex;
      flex-direction: row-reverse;
      justify-content: space-between;
      width: 100%;

      .title-section {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-left: 100px;

        h1 {
          display: block;
          color: #f7f7f7;
          font-size: 90px;
          width: fit-content;
          margin: 0;
        }
        h4 {
          width: 100%;
          margin: 10px 0 0 0;
        }
        .button {
          align-self: flex-start;
          margin-top: 30px;
        }
      }

      .images-slideshow {
        display: flex;
        flex-direction: column;
      }
    }
  }
`;

export default function LandingPage() {
  return (
    <LandingPageContainer className='landing-wrapper'>
      <div className='header'>
        <Logo />
        <p className='sign-in hide'>
          Already have an account? <Link to='/login'>Log In</Link>
        </p>
      </div>

      <div className='main-content'>
        <section className='images-slideshow'>
          <img
            src={landingPageImage3}
            alt='Athletes working out.'
            className='landing-image hide image1'
          />

          <img
            src={landingPageImage}
            alt='Athletes working out.'
            className='landing-image'
          />

          <img
            src={landingPageImage2}
            alt='Athletes working out.'
            className='landing-image hide'
          />
        </section>

        <section className='title-section'>
          <h1 className='hide'>
            Work out,
            <br /> anytime
          </h1>
          <h4>Attend classes that are run by local instructors, anywhere!</h4>

          <div className='button'>
            <Link to='/accountType'>
              <Button textContent='Join Now!' />
            </Link>
          </div>
        </section>
      </div>

      <p className='mobile-login'>
        Already have an account? <Link to='/login'>Log In</Link>
      </p>
    </LandingPageContainer>
  );
}
