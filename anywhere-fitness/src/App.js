import React from 'react';
import { Route } from 'react-router-dom';

import './App.css';

import LandingPage from './Pages/LandingPage/LandingPage';
import AccountType from './Pages/AccountType/Components/AccountType';
import ClientSelected from './Pages/AccountType/Components/ClientSelected';
import InstructorSelected from './Pages/AccountType/Components/InstructorSelected';
import LoginPage from './Pages/LoginPage/LoginPage';
import ClientSignUp from './Pages/SignUpPage/ClientSignUp';
import InstructorSignUp from './Pages/SignUpPage/InstructorSignUp';

function App() {
  return (
    <div className='App'>
      <Route exact path='/' component={LandingPage} />
      <Route exact path='/accountType' component={AccountType} />
      <Route path='/login' component={LoginPage} />

      <Route exact path='/client' component={ClientSelected} />
      <Route exact path='/instructor' component={InstructorSelected} />

      <Route path='/client/signUp' component={ClientSignUp} />
      <Route path='/instructor/signUp' component={InstructorSignUp} />
    </div>
  );
}

export default App;
