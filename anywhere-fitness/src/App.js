import React from 'react';
import { Route } from 'react-router-dom';

import './App.css';

import LandingPage from './Pages/LandingPage/LandingPage';
import AccountType from './Pages/AccountType/Components/AccountType';
import UserType from './Pages/AccountType/Components/UserType';
import LoginPage from './Pages/LoginPage/LoginPage';
import SignUp from './Pages/SignUpPage/SignUp';

function App() {
  return (
    <div className='App'>
      <Route exact path='/' component={LandingPage} />
      <Route exact path='/accountType' component={AccountType} />
      <Route path='/login' component={LoginPage} />

      <Route exact path='/accountType/:typeName' component={UserType} />
      <Route path='/accountType/:typeName/signUp' component={SignUp} />
    </div>
  );
}

export default App;
