import React from 'react';
import { Switch } from 'react-router-dom';

// Components
import Header from '../Header/Header';
import RegistrationRoute from '../../routes/RegistrationRoute';
import LoginRoute from '../../routes/LoginRoute';
import DashboardRoute from '../../routes/DashboardRoute';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import PublicOnlyRoute from '../PublicOnlyRoute/PublicOnlyRoute';

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

          <PublicOnlyRoute
            path={'/login'}
            comp={LoginRoute}
          />

          <PublicOnlyRoute
            path={'/register'}
            comp={RegistrationRoute}
          />

        </Switch>
      </div>
    </>
  );
}

export default App;
