import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Components
import Header from '../Header/Header';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import PublicOnlyRoute from '../PublicOnlyRoute/PublicOnlyRoute';
import DashboardRoute from '../../routes/DashboardRoute';
import AllTransactionsRoute from '../../routes/AllTransactionsRoute';
import TransactionRoute from '../../routes/TransactionRoute';
import LoginRoute from '../../routes/LoginRoute';
import RegistrationRoute from '../../routes/RegistrationRoute';
import LandingRoute from '../../routes/LandingRoute';

const App = () => {
  return (
    <>
      <Header />
      <div className='App'>
        felix

        <Switch >
          <PrivateRoute
            exact
            path={'/dashboard'}
            comp={DashboardRoute}
          />

          <PrivateRoute
            path={'/transactions'}
            comp={AllTransactionsRoute}
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

          <Route
            path={'/'}
            component={LandingRoute}
          />
        </Switch>
      </div>
    </>
  );
}

export default App;
