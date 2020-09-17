import React from 'react';
import { Switch } from 'react-router-dom';

// Util Components
import Header from '../Header/Header';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import PublicOnlyRoute from '../PublicOnlyRoute/PublicOnlyRoute';

// Main Components
import DashboardRoute from '../../routes/DashboardRoute';
import TransactionsRoute from '../../routes/TransactionsRoute';
import TransactionRoute from '../../routes/TransactionRoute';

// Authentication & Registration Components
import LoginRoute from '../../routes/LoginRoute';
import RegistrationRoute from '../../routes/RegistrationRoute';
// import LandingRoute from '../../routes/LandingRoute';

import '../../styles-wip/index.css'

const App = () => {
  return (
    <>
      <Header />
      <div className='App centered'>
        <Switch>
          {/* This is just a placeholder.
          Should there be a landing route? */}
          <PrivateRoute
            exact path={'/'}
            comp={DashboardRoute} 
          />

          <PrivateRoute
            exact path={'/dashboard'}
            comp={DashboardRoute}
          />

          <PrivateRoute
            path={'/transactions'}
            comp={TransactionsRoute}
          />

          <PrivateRoute
            path={'/transaction/:type/:id'}
            comp={TransactionRoute}
          />

          <PublicOnlyRoute
            path={'/login'}
            comp={LoginRoute}
          />

          <PublicOnlyRoute
            path={'/register'}
            comp={RegistrationRoute}
          />

          {/* <Route
            path={'/'}
            component={LandingRoute}
          /> */}
        </Switch>
      </div>
    </>
  );
};

export default App;
