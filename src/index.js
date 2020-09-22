import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom';
import { UserProvider } from './contexts/UserContext';
import { AlertsProvider } from './contexts/AlertsContext';
import { TransactionsProvider } from './contexts/TransactionsContext';

import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';
import App from './components/App/App';

import './styles-wip/index.css'


ReactDOM.render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
        <UserProvider>
          <AlertsProvider>
            <TransactionsProvider>
              <App />
            </TransactionsProvider>
          </AlertsProvider>
        </UserProvider>
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById('root')
);