import React from 'react';
import { Route } from 'react-router-dom';

import './App.css';

import LandingPage from './Pages/LandingPage/LandingPage';
import AccountType from './Pages/AccountType/AccountType';
import UserType from './Pages/AccountType/UserType';
import LoginPage from './Pages/LoginPage/LoginPage';
import SignUpForm from './Pages/SignUpPage/SignUpForm';
import MoreInfoForm from './Pages/SignUpPage/MoreInfoForm';

import ClientHomePage from './Pages/ClientHomePage/ClientHomePage';
import InstructorHomePage from './Pages/InstructorHomePage/InstructorHomePage';

function App() {
  return (
    <div className='App'>
      {/* <Route exact path='/' component={LandingPage} /> */}
      <Route exact path='/' component={ClientHomePage} />

      <Route exact path='/accountType' component={AccountType} />
      <Route path='/login' component={LoginPage} />

      <Route exact path='/accountType/:userType' component={UserType} />

      <Route
        exact
        path='/accountType/:userType/signUp'
        component={SignUpForm}
      />
      <Route
        path='/accountType/instructor/signUp/moreInfo'
        component={MoreInfoForm}
      />
    </div>
  );
}

export default App;
