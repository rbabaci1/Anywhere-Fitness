import React from 'react';
import { Route } from 'react-router-dom';

import './App.css';

import LandingPage from './Pages/LandingPage/LandingPage';
import AccountType from './Pages/AccountType/Components/AccountType';
import UserType from './Pages/AccountType/Components/UserType';
import LoginPage from './Pages/LoginPage/LoginPage';
import SignUpForm from './Pages/SignUpPage/SignUpForm';

function App() {
  return (
    <div className='App'>
      <Route exact path='/' component={LandingPage} />
      <Route exact path='/accountType' component={AccountType} />
      <Route path='/login' component={LoginPage} />

      <Route exact path='/accountType/:typeName' component={UserType} />
      <Route path='/accountType/:typeName/signUp' component={SignUpForm} />
    </div>
  );
}

export default App;
