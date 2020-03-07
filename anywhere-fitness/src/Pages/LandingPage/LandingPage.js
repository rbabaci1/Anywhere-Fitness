import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Logo from '../../ReusableComponents/Logo';
import Button from '../../ReusableComponents/Button';
import AbsoluteWrapper from '../../ReusableComponents/AbsoluteWrapper';

import landingPageImage from '../Images/landingPageImage.png';
import landingPageImage2 from '../Images/landingPageImage2.png';
import landingPageImage3 from '../Images/landingPageImage3.png';

const LandingPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .landing-image {
    width: 100%;
  }
  .main-content {
    width: 100%;
  }
  h4 {
    margin-top: 20px;
    font-size: 17px;
    font-weight: 500;
    color: #f7f7f7;
    line-height: 20px;
    letter-spacing: 0.36px;
    text-align: center;
  }
  p {
    font-size: 14px;
    line-height: 13px;
    width: 220px;
    color: #f7f7f7;
    margin: 70px 0 0 0;
    text-align: center;
    letter-spacing: 0.45px;

    a {
      color: #fa2742;
      text-decoration: none;
      &:hover {
        color: #f3617a;
      }
    }
  }
  .button {
    margin-top: 70px;
    text-align: center;
  }

  /********** Media queries ************/

  @media only screen and (min-width: 700px) {
    .landing-image {
      align-self: flex-end;
      display: block;
      margin-top: 20px;
    }
    .images-slideshow {
      height: fit-content;
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
        width: 320px;
        padding-right: 15px;
      }
      h1 {
        font-size: 28px;
        line-height: 33px;
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
        margin: 200px 20px 0 70px;

        h1 {
          display: block;
          color: #f7f7f7;
          font-size: 55px;
          width: fit-content;
          margin: 0;
        }
        h4 {
          width: 100%;
          text-align: start;
          margin: 10px 0 0 0;
          line-height: 25px;
        }
        .button {
          align-self: flex-start;
          margin-top: 40px;
        }

        @media only screen and (min-width: 1000px) {
          h1 {
            font-size: 80px;
          }
        }
      }

      .images-slideshow {
        display: flex;
        flex-direction: column;
      }
    }
  }
  @media only screen and (min-width: 500px) {
    h1 {
      margin: 10px 0;
    }
    .main-content {
      width: 100%;
    }
    .title-section {
      h1 {
        font-weight: bold;
      }
      h4 {
        width: 100%;
        font-size: 21px;
      }
    }

    .mobile-login {
      font-size: 20px;
      width: 100%;
    }
    .button {
      margin-top: 50px;
    }
  }
`;

export default function LandingPage() {
  return (
    <AbsoluteWrapper>
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
          Already have an account ? <Link to='/login'>Log In</Link>
        </p>
      </LandingPageContainer>
    </AbsoluteWrapper>
  );
}
