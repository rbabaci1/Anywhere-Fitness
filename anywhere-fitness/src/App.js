import React from 'react';
import { Route } from 'react-router-dom';

import './App.css';

import LandingPage from './Pages/LandingPage/LandingPage';
import AccountType from './Pages/AccountType/Components/AccountType';
import ClientSelected from './Pages/AccountType/Components/ClientSelected';
import InstructorSelected from './Pages/AccountType/Components/InstructorSelected';
import LoginPage from './Pages/LoginPage/LoginPage';

function App() {
  return (
    <div className='App'>
      <Route exact path='/' component={LandingPage} />
      <Route exact path='/accountType' component={AccountType} />

      <Route path='/client' component={ClientSelected} />
      <Route path='/instructor' component={InstructorSelected} />
      <Route path='/login' component={LoginPage} />
    </div>
  );
}

export default App;
