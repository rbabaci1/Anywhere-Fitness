import React, { useContext } from 'react';
import { Route, Switch, __RouterContext } from 'react-router-dom';
import PrivateRoute from './Auxillary/privateRoute';
import { useTransition, animated } from 'react-spring';

import LandingPage from './Pages/LandingPage/LandingPage';
import AccountType from './Pages/AccountType/AccountType';
import UserType from './Pages/AccountType/UserType';
import LoginPage from './Pages/LoginPage/LoginPage';
import SignUpForm from './Pages/SignUpPage/SignUpForm';
import MoreInfoForm from './Pages/SignUpPage/MoreInfoForm';
import ClientHomePage from './Pages/ClientHomePage/ClientHomePage';
import InstructorHomePage from './Pages/InstructorHomePage/InstructorHomePage';

function App() {
  const { location } = useContext(__RouterContext);
  const transitions1 = useTransition(location, location => location.pathname, {
    from: { opacity: 0, transform: 'translate(100%, 0)' },
    enter: { opacity: 1, transform: 'translate(0%, 0)' },
    leave: { opacity: 0, transform: 'translate(20px, 0)' }
  });
  const transitions2 = useTransition(location, location => location.pathname, {
    from: { opacity: 0, transform: 'translate(0, 100%)' },
    enter: { opacity: 1, transform: 'translate(0%, 0)' },
    leave: { opacity: 0, transform: 'translate(0%, 100px)' }
  });

  return (
    <div className='App'>
      {transitions1.map(({ item, props, key }) => (
        <animated.div key={key} style={props}>
          <Switch location={item}>
            <Route exact path='/' component={LandingPage} />
            <Route exact path='/login' component={LoginPage} />

            {/*Work in progress, not actual component that will be rendered*/}
            <PrivateRoute path='/succeed' component={AccountType} />

            <Route exact path='/accountType' component={AccountType} />
          </Switch>
        </animated.div>
      ))}

      {transitions2.map(({ item, props, key }) => (
        <animated.div key={key} style={props}>
          <Switch>
            <Route exact path='/accountType/:userType' component={UserType} />
            <Route
              exact
              path='/accountType/:userType/signUp'
              component={SignUpForm}
            />
            <Route
              exact
              path='/accountType/instructor/signUp/moreInfo'
              component={MoreInfoForm}
            />
            <Route exact path='/ClientHome' component={ClientHomePage} />
          </Switch>
        </animated.div>
      ))}

      <Route path='/InstructorHome' component={InstructorHomePage} />
    </div>
  );
}

export default App;
