import React from 'react';
import { Route } from 'react-router-dom';

import './App.css';

import LandingPage from './Pages/LandingPage/LandingPage';
import AccountTypeHome from './Pages/AccountType/Components/AccountTypeHome';
import ClientSelected from './Pages/AccountType/Components/ClientSelected';
import InstructorSelected from './Pages/AccountType/Components/InstructorSelected';

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
      <Route exact path='/' component={AccountTypeHome} />

      <Route path='/clientSelect' component={ClientSelected} />
      <Route path='/instructorSelect' component={InstructorSelected} />
    </div>
  );
}

export default App;
