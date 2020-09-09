import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Components
import Header from '../Header/Header';
import RegistrationRoute from '../../routes/RegistrationRoute';

const App = () => {
  return (
    <>
      <Header />
      <div className='App'>
        felix
        <Switch >
          <Route 
            path={'/'}
            component={RegistrationRoute}
          />
        </Switch>
      </div>
    </>
  );
}

export default App;
