import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom';
import { UserProvider } from './contexts/UserContext';
import { TransactionsProvider } from './contexts/TransactionsContext';

import CSSBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';
import App from './components/App/App';

import '../src/styles-wip/index.css';

ReactDOM.render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <CSSBaseline />
        <TransactionsProvider>
          <UserProvider>
            <App />
          </UserProvider>
        </TransactionsProvider>
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById('root')
);