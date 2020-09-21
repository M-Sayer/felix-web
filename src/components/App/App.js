import React from 'react';
import { Switch } from 'react-router-dom';

// Util Components
import Header from '../Header/Header';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import PublicOnlyRoute from '../PublicOnlyRoute/PublicOnlyRoute';

// Main Components
import DashboardRoute from '../../routes/DashboardRoute';
import CreateTransactionRoute from '../../routes/CreateTransactionRoute';
import TransactionsRoute from '../../routes/TransactionsRoute';
import TransactionRoute from '../../routes/TransactionRoute';
import AlertsRoute from '../../routes/AlertsRoute';

// Authentication & Registration Components
import LoginRoute from '../../routes/LoginRoute';
import RegistrationRoute from '../../routes/RegistrationRoute';
// import LandingRoute from '../../routes/LandingRoute';

const App = () => {

  return (
    <>
      <Header />
      <div className='App'>
        <Switch>
          {/* This is just a placeholder.
          Should there be a landing route? */}
          <PrivateRoute
            exact path={'/'}
            comp={DashboardRoute} 
          />

          <PrivateRoute 
            path={'/alerts'}
            comp={AlertsRoute}
          />

          <PrivateRoute
            path={'/createtransaction'}
            comp={CreateTransactionRoute}
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
