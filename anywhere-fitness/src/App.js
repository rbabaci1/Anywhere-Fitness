import React from 'react';
import { Route } from 'react-router-dom';

import './App.css';

import LandingPage from './Pages/LandingPage/LandingPage';
import AccountType from './Pages/AccountType/Components/AccountType';
import ClientType from './Pages/AccountType/Components/ClientType';
import InstructorType from './Pages/AccountType/Components/InstructorType';

function App() {
  return (
    <div className='App'>
      {/* <AccountTypeHome /> */}

      {/*Login/Signup Page*/}

      {/*Choose account type page*/}
      {/*Sign up form*/}
      {/*Login Form*/}
      {/*User home page*/}
      {/*Class Page / schedule /// reserve button is on schedule next to the class
      and the about class button is a feature we will add specifically for the web app*/}
      {/*Invite a friend*/}
      <Route exact path='/' component={LandingPage} />
      <Route exact path='/accountType' component={AccountType} />
    </div>
  );
}

export default App;
